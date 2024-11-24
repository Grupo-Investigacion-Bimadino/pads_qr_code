import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from './schemas/ticket.schemas';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private ticketModel: Model<Ticket>) {}

  create(CreateTicketDto: CreateTicketDto) {
    const createdTicket = new this.ticketModel(CreateTicketDto);
    return createdTicket.save();
  }

  findAll() {
    return this.ticketModel.find().exec();
  }

  findOne(id: string) {
    return this.ticketModel.findById(id).exec();
  }

  update(id: string, UpdateTicketDto: UpdateTicketDto) {
    return this.ticketModel
      .findByIdAndUpdate(id, UpdateTicketDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.ticketModel.findByIdAndDelete(id).exec();
  }
}
