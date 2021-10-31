import {Inject, Injectable} from '@nestjs/common';
import Any = jasmine.Any;
import {ClientProxy, ClientProxyFactory, Transport} from "@nestjs/microservices";
import {AddUserDto} from "./user.dto";



@Injectable()
export class UserService {
    private client: ClientProxy
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8123
            }
        })
    }
    async get() {
        return this.client.send('get', "");
    }
    async getItem(id:number){
        return this.client.send('getItem', id);
    }
    async add(data:any){
        return this.client.send("add", data);
    }
    async update(id:number,data:any){
        return this.client.send("update",{id:id,data:data});
    }
    async delete(id:number){
        return this.client.send("delete",id);
    }
}
