import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Attendence extends Document {
  @Prop()
  nombre: string;

  @Prop()
  hora: string;

  @Prop()
  fecha: string;

  @Prop()
  asistencia: string;
}

export const AttendenceSchema = SchemaFactory.createForClass(Attendence);
