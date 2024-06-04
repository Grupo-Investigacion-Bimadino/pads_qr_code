import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {
  create(createTicketDto: CreateTicketDto) {
    return createTicketDto;
  }

  findAll() {
    return [
    { 
      "Id": "1", 
      "Hora": "6:51", 
      "Fecha": "21-04-24", 
      "Generador": "generar",  
      "pin": "1525" ,
      "id_eventos ": "2" 
     },
     { 
      "Id": "2", 
      "Hora": "8:51", 
      "Fecha": "26-05-24", 
      "Generador": "generar",  
      "pin": "1825" ,
      "id_eventos ": "4" 
     },
     { 
      "Id": "3", 
      "Hora": "9:51", 
      "Fecha": "26-05-24", 
      "Generador": "generar",  
      "pin": "3625" ,
      "id_eventos ": "4" 
     }, ];
  }

  findOne(id: number) {
    return { 
      "Id": "3", 
      "Hora": "9:51", 
      "Fecha": "26-05-24", 
      "Generador": "generar",  
      "pin": "3625" ,
      "id_eventos ": "4" 
     } ;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return updateTicketDto;
  }

  remove(id: number) {
    return  { 
      "Id": "2", 
      "Hora": "8:51", 
      "Fecha": "26-05-24", 
      "Generador": "generar",  
      "pin": "1825" ,
      "id_eventos ": "4" 
     };
  }
}