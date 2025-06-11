import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

    @Get('/hello')
    hello(@Req() request: Request, @Res() response: Response){

        console.log(request.url)
        response.status(200).json({
            message: 'Hello word'
        })
    }

    @Get('/new')
    @HttpCode(201)
    somethingNew(){

        return 'Something new!';
    }

    @Get('/notFound')
    @HttpCode(404)
    notFoundPage(){

        return 'Not Found';
    }

    @Get('/error')
    @HttpCode(500)
    errorPage(){

        return 'Internal Server Error';
    }

    // enpoint que incluye un pipe para parsear el parametro y que no sea una string
    @Get('/ticket/:num')
    getTicket(@Param('num', ParseIntPipe) num: number){

        return num + 14;
    }

    // enpoint que recibe un query y usa un pipe personlizado para validar los datos
    @Get('/greet')
    @UseGuards(AuthGuard) // usa un guard para validar el acceso
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}){

        
        return 'Hello ' + query.name + ', you are ' + query.age + ' years old!';
    }
}
