import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UnauthorizedException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  getByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Put('/:email')
  updateByEmail(@Body() user: UpdateUserDto, @Param('email') email: string) {
    let message = true
    this.userService.updateByEmail(email, user)

    return message
  }
  

  @Post()
  createUser(@Body() user: CreateUserDto) {

    return this.userService.create(user);
  }

  @Post('login')
  async login(@Body() body: any) {
    const user = await this.userService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return user;
  }
}