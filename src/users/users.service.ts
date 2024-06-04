import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  findAll() {
    return [{ 
      "Id": "1", 
      "nombre de usuario": "pedrito2412", 
      "rol": "docente", 
      "identificacion": "113254367", 
      "id_asistencia": "1",  
      "id_eventos": "3" 
     },
     { 
      "Id": "2", 
      "nombre de usuario": "Dandres.24", 
      "rol": "estudiante", 
      "identificacion": "1005964827", 
      "id_asistencia": "16",  
      "id_eventos": "2" 
     },
     { 
      "Id": "3", 
      "nombre de usuario": "juan.252", 
      "rol": "estudiante", 
      "identificacion": "1004627932", 
      "id_asistencia": "14",  
      "id_eventos": "2" 
     }];
  }

  findOne(id: number) {
    return { 
      "Id": "2", 
      "nombre de usuario": "Dandres.24", 
      "rol": "estudiante", 
      "identificacion": "1005964827", 
      "id_asistencia": "16",  
      "id_eventos": "2" 
     };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  remove(id: number) {
    return { 
      "Id": "1", 
      "nombre de usuario": "pedrito2412", 
      "rol": "docente", 
      "identificacion": "113254367", 
      "id_asistencia": "1",  
      "id_eventos": "3" 
     };
  }
}
