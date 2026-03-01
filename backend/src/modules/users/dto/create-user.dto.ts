import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { Roles, VocationalFields } from '../../types/user';


export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;


  @IsEmail()
  email: string;

  @MinLength(5)
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(Roles)
  rol: Roles;

  @IsOptional()
  @IsEnum(VocationalFields)
  vocational_field?: VocationalFields;

  @IsOptional()
  @IsString()
  sex?: 'H' | 'M';

  @IsOptional()
  @IsString()
  img?: string;

  @IsNotEmpty()
  @IsString()
  classroom: string;

  @IsNotEmpty()
  @IsString()
  nie: string;
}