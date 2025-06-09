import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'Exequiel Carrizo',
            phone: '263456-7890'
        },
        {
            id: 2,
            name: 'John Doe',
            phone: '123456-7890'
        },
        {
            id: 3,
            name: 'Jane Smith',
            phone: '987654-3210'
        }
    ];

    getAllUsers() {

        return this.users;
    }
}
