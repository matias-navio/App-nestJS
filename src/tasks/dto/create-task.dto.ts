import { IsString, MinLength } from "class-validator";

// dto para la creacion de una tarea
// usa validaciones para sus datos
export class CreateTaskDto{

    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    description: string;
}