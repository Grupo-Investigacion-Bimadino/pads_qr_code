import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define la clase para el esquema de Users
@Schema({ timestamps: true })
export class Users extends Document {
  @Prop()
  nombre: string;

  @Prop()
  rol: string;

  @Prop()
  identificacion: string;
}

// Genera el esquema de Mongoose a partir de la clase Users
export const UsersSchema = SchemaFactory.createForClass(Users);

