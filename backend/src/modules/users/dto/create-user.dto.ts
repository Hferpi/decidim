import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Roles } from '../user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(Roles)
  rol: Roles;
}