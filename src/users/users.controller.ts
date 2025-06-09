import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({})
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get('/usuarios')
    getAllUsers(){
        return this.usersService.getAllUsers();
    }
}
