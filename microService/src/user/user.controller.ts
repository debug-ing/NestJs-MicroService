import { Controller } from '@nestjs/common';
import {MessagePattern} from "@nestjs/microservices";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(
        private userService:UserService
    ) {
    }
    @MessagePattern("get")
    async all(){
        return  await this.userService.get();
    }

    @MessagePattern("getItem")
    async getItem(data:number){
        return this.userService.findOne(data);
    }

    @MessagePattern("add")
    async add(data:any){
        return this.userService.add(data);
    }

    @MessagePattern("delete")
    async delete(id:any){
        return this.userService.delete(id);
    }

    @MessagePattern("update")
    async update(data:any){
        return this.userService.update(Number.parseFloat(data['id']),data['data']);
    }
}
