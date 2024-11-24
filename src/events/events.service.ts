import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './schemas/Event.schema';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  create(CreateEventDto: CreateEventDto) {
    const createdEvent = new this.eventModel(CreateEventDto);
    return createdEvent.save();
  }

  findAll() {
    return this.eventModel.find().exec();
  }

  findOne(id: string) {
    return this.eventModel.findById(id).exec();
  }

  update(id: string, UpdateEventDto: UpdateEventDto) {
    return this.eventModel
      .findByIdAndUpdate(id, UpdateEventDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.eventModel.findByIdAndDelete(id).exec();
  }
}
