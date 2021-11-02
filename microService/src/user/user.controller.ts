import { Controller } from '@nestjs/common';
import {DeleteDto, UserDto, UserUpdateDto} from "./user.dto";
import {GrpcMethod} from "@nestjs/microservices";
import {Metadata, ServerUnaryCall} from "@grpc/grpc-js";
import {UserService} from "./user.service";
import {createEvalAwarePartialHost} from "ts-node/dist/repl";

@Controller('user')
export class UserController {
    constructor(
        private userService:UserService
    ) {
    }
    @GrpcMethod('UserService')
    async create(
        data: UserDto,
        metadata: Metadata,
        call: ServerUnaryCall<UserDto, any>,
    ) {
        let res = await this.userService.add(data);
        return res;
    }
    @GrpcMethod('UserService')
    async get(){
        let data = await this.userService.get();
        return {"data":data};
    }
    @GrpcMethod("UserService")
    async update( data: UserUpdateDto,
            metadata: Metadata,
            call: ServerUnaryCall<UserUpdateDto, any>){
        let res = await this.userService.update(data.id,{email:data.email,name:data.name,lastName:data.lastName,password:data.password});
        if (res  == undefined){
            return {status:false,message:"Item Not Found!"};
        }else {
            return res;
        }
    }
    @GrpcMethod("UserService")
    async getItem(data:DeleteDto,metaData:Metadata,call:ServerUnaryCall<DeleteDto, any>){
        let res = await this.userService.findOne(data.id);
        if (res  == undefined){
            return {status:false,message:"Item Not Found!"};
        }else{
            return res;
        }
    }
    @GrpcMethod("UserService")
    async delete(data:DeleteDto,metaData:Metadata,call:ServerUnaryCall<DeleteDto, any>){
        let res = await this.userService.delete(data.id);
        return {status:res}
    }
}
