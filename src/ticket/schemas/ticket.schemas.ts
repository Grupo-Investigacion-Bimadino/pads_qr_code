import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Ticket extends Document {
  _id: mongoose.Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  Date: string;

  @Prop({ type: String, required: true })
  Role: string;

  @Prop({ type: String, required: true })
  Type: string;

  @Prop({ type: String, default: 'No description' })
  Description: string;


}

export const TicketSchema = SchemaFactory.createForClass(Event);