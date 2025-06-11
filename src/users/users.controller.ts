import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get('/all')
    getAllUsers(){
        return this.usersService.getAllUsers();
    }

    // endpoint para crear un usuario, recibe un objeto de tipo CreateUserDto
    // tiene validacion de datos con ValidationPipe
    @Post('/create')
    crearUser(@Body() user: CreateUserDto){

        return this.usersService.createUser(user);
    }
}
