import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

// inteface que define la estructura de un usuario
interface User{
    id: number;
    name: string;
    age: number;
    mail: string;
    password: string;
}

@Injectable()
export class UsersService {

    private users: any = [];

    // metodo que devuelve todos los usuarios
    getAllUsers() {

        return this.users;
    }

    // metodo para crear un usuario
    createUser(user: CreateUserDto){

        this.users.push(user);

        return {
            ...user,
            id: this.users.length
        }
    }
}
