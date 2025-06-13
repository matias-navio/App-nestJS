import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiResponse({status: 200, description: 'Lista de usuarios'})
    @Get('/all')
    getAllUsers(){

        return this.usersService.getAllUsers();
    }

    // endpoint para crear un usuario, recibe un objeto de tipo CreateUserDto
    // tiene validacion de datos con ValidationPipe
    @ApiResponse({status: 201, description: 'Usuario creado exitosamente'})
    @ApiResponse({status: 400, description: 'Error al crear usuario'})
    @Post('/create')
    crearUser(@Body() user: CreateUserDto){

        return this.usersService.createUser(user);
    }
}
