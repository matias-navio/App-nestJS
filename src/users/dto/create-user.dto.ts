import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Max(100)
    age: number;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    mail: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}