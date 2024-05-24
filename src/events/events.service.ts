import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  create(createEventDto: CreateEventDto) {
    return CreateEventDto;
  }

  findAll() {
    return `This action returns all events`;
  }

  findOne(id: number) {
    return `This action returns a #${id} events`;
  }

  update(id: number, updateComentDto: UpdateEventDto) {
    return `This action updates a #${id} events`;
  }

  remove(id: number) {
    return `This action removes a #${id} events`;
  }

  partialUpdate(id: number, updateComentDto: UpdateEventDto) {
    return `This action partially updates a #${id} events`;
  }
}