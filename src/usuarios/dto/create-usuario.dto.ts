import { IsString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsNumber()
  @IsNotEmpty()
  RolesDeUsuarioId: number;
}