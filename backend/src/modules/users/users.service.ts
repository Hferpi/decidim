import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  findAll() {
    return this.userRepo.find();
  }

  findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async create(userDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);

    console.log('--- NUEVO HASH GENERADO ---');
    console.log('Password original:', userDto.password);
    console.log('Hash para la DB:', hashedPassword);
    console.log('---------------------------');

    const newUser = this.userRepo.create({
      ...userDto,
      password: hashedPassword,
    });

    const savedUser = await this.userRepo.save(newUser);

    const { password, ...result } = savedUser;
    return result;
  }

  async validateUser(email: string, pass: string) {
    const user = await this.userRepo.findOne({ where: { email } });
    if (user) {

      console.log('pass', pass);
      console.log('hash bd', user.password)

      const isMatch = await bcrypt.compare(pass, user.password);
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async updateByEmail(email: string, user: UpdateUserDto) {
    const existingUser = await this.userRepo.findOne({
      where: { email }
    })

    if (!existingUser) { throw new Error('Usuario no encontrado') }

    if (!user.password || user.password.trim() === '') {
      delete user.password;
    } else {
      user.password = await bcrypt.hash(user.password, 10);
    }

    Object.assign(existingUser, user)

    return this.userRepo.save(existingUser)
  }
}