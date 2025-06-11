import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    // recibe la edad
    const ageNumber = parseInt(value.age.toString(), 10);

    // si no es una numero lanza una excepcion
    if(isNaN(ageNumber)){
      throw new HttpException('La edad debe ser un numero', HttpStatus.BAD_REQUEST);
    }

    // si es un numero devuelve todos los datos que recibio y ademas la edad como un numero
    return {...value, age: ageNumber};
  }
}
