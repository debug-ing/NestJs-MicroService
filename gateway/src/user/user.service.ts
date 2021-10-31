import { Injectable } from '@nestjs/common';
import Any = jasmine.Any;

@Injectable()
export class UserService {
    async get():Promise<String>{
        return "all";
    }
    async getItem():Promise<String>{
        return "getItem";
    }
    async add():Promise<String>{
        return "add";
    }
    async update():Promise<String>{
        return "update";
    }
    async delete():Promise<String>{
        return "delete";
    }
}
