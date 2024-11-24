import { Module } from '@nestjs/common';
import { AttendenceService } from './attendence.service';
import { AttendenceController } from './attendence.controller';
import { Attendence, AttendenceSchema } from './schemas/attendence.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { junit } from 'node:test/reporters';

@Module({
  imports:[MongooseModule.forFeature([{name: Attendence.name, schema: AttendenceSchema }])], 
  controllers: [AttendenceController],
  providers: [AttendenceService],
})
export class AttendenceModule {}
