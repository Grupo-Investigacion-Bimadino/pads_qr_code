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
    const createAttendence = new this.attendenceModel(createAttendenceDto);
    return createAttendence.save();
  }

  findAll() {
    return this.attendenceModel.find().exec();
  }

  findOne(id: string) {
    return this.attendenceModel.findById(id).exec();
  }

  update(id: string, UpdateAttendenceDto: UpdateAttendenceDto) {
    return this.attendenceModel
      .findByIdAndUpdate(id, UpdateAttendenceDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.attendenceModel.findByIdAndDelete(id).exec();

  }
}
