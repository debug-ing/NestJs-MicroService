import {IsEmail, IsInt, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Type} from "class-transformer";

export class AddUserDto {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    lastName:string;
}
export class IdUserDto {
    @IsInt()
    @Type(() => Number)
    id:number;
}