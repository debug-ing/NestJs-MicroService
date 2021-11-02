import {Inject, Injectable, OnModuleInit} from '@nestjs/common';

import {Client, ClientGrpc, ClientProxy, ClientProxyFactory, RpcException, Transport} from "@nestjs/microservices";

import {Metadata} from "@grpc/grpc-js";
import { Observable } from 'rxjs';


interface UserGrpcService {
    create(data: { email:string,password:string,name: string; lastName: string }): Observable<any>;
    delete(data:{id:number}):Observable<boolean>;
    getItem(data:{id:number}):Observable<any>;
    get(data:{}):Observable<{id:number,email:string,password:string,name:string,lastName:string,createdAt:string,updatedAt:string}[]>;

    update(data:{id:number,email:string,password:string,name:string,lastName:string}):Observable<any>;
}

@Injectable()
export class UserService  implements  OnModuleInit {
    private userGrpcService: UserGrpcService;

    constructor(@Inject('user') private client: ClientGrpc) {}

    onModuleInit() {
        this.userGrpcService =
            this.client.getService<UserGrpcService>('UserService');
    }
    async get() {
        let data = await this.userGrpcService.get({}).toPromise();
        console.log(data);
        return data;
    }
    async getItem(id:number){
        let data = await this.userGrpcService.getItem({id:id}).toPromise();
        return data;
    }
    async add(data:any){
        console.log(data);
        return await this.userGrpcService.create(data).toPromise();
    }
    async update(id:number,data:any){
        return await this.userGrpcService.update({id:id,email:data.email,password:data.password,name:data.name,lastName:data.lastName}).toPromise();
    }
    async delete(id:number){
        let data = await this.userGrpcService.delete({id:id}).toPromise();
        return data;

    }
}
