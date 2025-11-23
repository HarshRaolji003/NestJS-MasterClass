import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findBy({ id });
    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.update(id, updateUserDto);

    return {
      status: 'success',
      message: 'User updated successfully',
    };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
