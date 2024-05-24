import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  create(createEventDto: CreateEventDto) {
    return CreateEventDto;
  }

  findAll() {
    return [{
      
        "Id": "1", 
        "Nombre": "clase_ddse", 
        "Hora": "6:51", 
        "Fecha": "21-04-24", 
        "Tipo": "clase",  
        "Descripcion": "primer_dia_de_clase" 
       
    },
  
    { 
      "Id": "2", 
      "Nombre": "clase robotica", 
      "Hora": "9:51", 
      "Fecha": "24-05-24", 
      "Tipo": "clase",  
      "Descripcion": "clase arduino" 
     },
     { 
      "Id": "3", 
      "Nombre": "clase algoritmia", 
      "Hora": "7:51", 
      "Fecha": "26-04-24", 
      "Tipo": "clase",  
      "Descripcion": "introduccion html" 
     }
  
  ];
  }

  findOne(id: number) {
    return { 
      "Id": "3", 
      "Nombre": "clase algoritmia", 
      "Hora": "7:51", 
      "Fecha": "26-04-24", 
      "Tipo": "clase",  
      "Descripcion": "introduccion html" 
     };
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return  updateEventDto ;
  }

  remove(id: number) {
    return {
      
      "Id": "1", 
      "Nombre": "clase_ddse", 
      "Hora": "6:51", 
      "Fecha": "21-04-24", 
      "Tipo": "clase",  
      "Descripcion": "primer_dia_de_clase" 
     
  };
  }
}