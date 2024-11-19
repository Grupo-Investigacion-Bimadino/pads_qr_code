import { Injectable } from '@nestjs/common';
import { CreateAttendenceDto } from './dto/create-attendence.dto';
import { UpdateAttendenceDto } from './dto/update-attendence.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { attendence } from './schemas/attendence.schemas';

@Injectable()
export class AttendenceService {
  constructor(@InjectModel(attendence.name) private attendenceModel: Model<attendence>) {}
  async create(createAttendenceDto: CreateAttendenceDto) {
    const createAttendence = new this.attendenceModel (createAttendenceDto);

    const results = await createAttendence.save()
    return results
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
