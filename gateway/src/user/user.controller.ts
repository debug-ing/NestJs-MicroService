import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AddUserDto, IdUserDto} from "./user.dto";
import {UserService} from "./user.service";

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
        return this.userService.getItem();
    }

    @Post()
    async add(@Body() addUserDto:AddUserDto){
        return this.userService.add();
    }

    @Delete(':id')
    async delete(@Param() idUserDto:IdUserDto){
        return this.userService.delete();
    }

    @Put(":id")
    async update(@Param() idUserDto:IdUserDto,@Body() addUserDto:AddUserDto){
        return this.userService.update();
    }
}
