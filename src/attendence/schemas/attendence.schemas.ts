import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class attendence extends Document {
  @Prop()
  nombre: string;

  @Prop()
  hora: string;

  @Prop()
  fecha: string;

  @Prop()
  asistencia: string;

  

  
}

export const attendenceSchema = SchemaFactory.createForClass(attendence);
