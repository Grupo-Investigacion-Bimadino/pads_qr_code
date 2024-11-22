import { Injectable } from '@nestjs/common';
import { CreateAttendenceDto } from './dto/create-attendence.dto';
import { UpdateAttendenceDto } from './dto/update-attendence.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attendence } from './schemas/attendence.schema';

@Injectable()
export class AttendenceService {
  constructor(
    @InjectModel(Attendence.name) private attendenceModel: Model<Attendence>,
  ) {}

  create(createAttendenceDto: CreateAttendenceDto) {
    return 'This action adds a new attendence';
  }

  findAll() {
    return `This action returns all attendence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendence`;
  }

  update(id: number, updateAttendenceDto: UpdateAttendenceDto) {
    return `This action updates a #${id} attendence`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendence`;
  }
}
