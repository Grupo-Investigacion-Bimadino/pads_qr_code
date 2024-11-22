import { Module } from '@nestjs/common';
import { AttendenceService } from './attendence.service';
import { AttendenceController } from './attendence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attendence, AttendenceSchema } from './schemas/attendence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Attendence.name, schema: AttendenceSchema },
    ]),
  ],
  controllers: [AttendenceController],
  providers: [AttendenceService],
})
export class AttendenceModule {}
