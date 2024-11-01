import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Message extends Document {
  @Prop()
  nombre: string;

  @Prop()
  hora: string;

  @Prop()
  fecha: string;

  @Prop()
  asistencia: string;

  @Prop()
  id: string;

  
}

export const MessageSchema = SchemaFactory.createForClass(Message);
