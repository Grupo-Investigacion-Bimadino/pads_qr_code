import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Message extends Document {
  @Prop()
  nombre: string;

  @Prop()
  fecha: string;

  @Prop()
  hora: string;

  @Prop()
  : string;

  @Prop()
  identificacion: string;

  @Prop()
  id: string;

  
}

export const MessageSchema = SchemaFactory.createForClass(Message);
