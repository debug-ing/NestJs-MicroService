import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository:Repository<User>,) {
    }
    async get():Promise<User[]>{
        return await this.userRepository.find();
    }
    async findOne(condition):Promise<User>{
        return await this.userRepository.findOne({ id:condition });
    }
    async add(data:any):Promise<User>{
        return await this.userRepository.save(data);
    }
    async delete(id:number):Promise<boolean>{
         await this.userRepository.createQueryBuilder().delete().from(User).where("id = :id", { id: id }).execute();
         return true;
    }
    async update(id:number,data:any):Promise<boolean>{
        await this.userRepository.createQueryBuilder().update(User).set(data).where("id = :id", { id: id }).execute();
        return true;

    }

}
