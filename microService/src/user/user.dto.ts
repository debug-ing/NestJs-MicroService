import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class UserDto {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;


    @IsString()
    @IsNotEmpty()
    lastName: string;

}
export class UserUpdateDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;


    @IsString()
    @IsNotEmpty()
    lastName: string;
}
export class DeleteDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;
}