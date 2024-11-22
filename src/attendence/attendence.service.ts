import { Injectable } from '@nestjs/common';
import { CreateAttendenceDto } from './dto/create-attendence.dto';
import { UpdateAttendenceDto } from './dto/update-attendence.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attendence } from './schemas/attendence.schemas';

@Injectable()
export class AttendenceService {
  constructor(@InjectModel(Attendence.name) private attendenceModel: Model<Attendence>) {}
  async create(createAttendenceDto: CreateAttendenceDto) {
    const createAttendence = new this.attendenceModel (createAttendenceDto);

    const results = await createAttendence.save()
    return results
  }

  findAll() {
    return this.attendenceModel.find();
  }

  findOne(id: string) {
    return this.attendenceModel.findById(id);
  }

  async update(id: string, updateAttendenceDto: UpdateAttendenceDto) {
    try {
      const updatattendence = await this.attendenceModel.findByIdAndUpdate(
        id,
        updateAttendenceDto,
        { new:true } );

      return updatattendence;
    }
    catch (e) {
      console.error(e)
    }
    finally{
      console.log('actualización finalizada.');
    }
  }

  async remove(id: string) {
    try {
      const deletedattendence = await this.attendenceModel.findByIdAndDelete(id);
      return deletedattendence;
    }
    finally{}
  }
}