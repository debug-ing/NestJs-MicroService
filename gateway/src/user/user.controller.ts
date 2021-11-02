import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AddUserDto, IdUserDto} from "./user.dto";
import {UserService} from "./user.service";
import {ClientProxy} from "@nestjs/microservices";
import Any = jasmine.Any;

@Controller('user')
export class UserController {
    constructor(private userService:UserService){
    }
    @Get()
    async get(){
        return this.userService.get();
    }

    @Get(":id")
    async findOne(@Param() idUserDto:IdUserDto){
        return this.userService.getItem(idUserDto.id);
    }

    @Post()
    async add(@Body() addUserDto:AddUserDto){
        return this.userService.add(addUserDto);
    }

    @Delete(':id')
    async delete(@Param() idUserDto:IdUserDto){
        return this.userService.delete(idUserDto.id);
    }

    @Put(":id")
    async update(@Param() idUserDto:IdUserDto,@Body() addUserDto:AddUserDto){
        return this.userService.update(idUserDto.id,addUserDto);
    }
}
