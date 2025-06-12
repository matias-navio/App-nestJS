import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    // metodo que devuelve todos los usuarios
    getAllUsers() {

        return this.prisma.user.findMany();
    }

    // metodo para crear un usuario
    createUser(user: CreateUserDto){

        return this.prisma.user.create({ data: user });
    }
}
