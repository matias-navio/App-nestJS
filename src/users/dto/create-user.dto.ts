import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    createAt: Date;
    updateAt: Date;
}