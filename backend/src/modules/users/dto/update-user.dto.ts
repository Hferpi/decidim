import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength
} from 'class-validator';

import { Roles, VocationalFiel } from '../../types/user';

export class UpdateUserDto {

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEnum(Roles)
  rol?: Roles;

  @IsOptional()
  @IsEnum(VocationalFiel)
  vocational_field?: VocationalFiel;

  @IsOptional()
  sex?: 'H' | 'M';

  @IsOptional()
  @IsString()
  img?: string;

  @IsOptional()
  @IsString()
  classroom?: string;

  @IsOptional()
  @IsString()
  nie?: string;
}