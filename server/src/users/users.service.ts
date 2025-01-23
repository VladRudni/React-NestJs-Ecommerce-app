import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaServise: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prismaServise.user.findFirst({ where: { email: email } });
  }

  async create(createUserDto: CreateUserDto) {
    const isUserExist = await this.findByEmail(createUserDto.email);

    if (isUserExist) {
      return new BadRequestException('A user with this email already exists.');
    }

    const user = await this.prismaServise.user.create({
      data: { ...createUserDto, basket: {} },
    });
    return user;
  }

  async updateUser(userId, updateUserDto: UpdateUserDto) {
    const isUserExist = await this.prismaServise.user.findFirst({
      where: { id: userId },
    });

    if (!isUserExist) {
      throw new NotFoundException('User with this id not found.');
    }

    const user = await this.prismaServise.user.update({
      where: { id: userId },
      data: { ...updateUserDto },
    });

    return user;
  }

  async deleteUser(userId) {
    const isUserExist = this.prismaServise.user.findFirst({
      where: { id: userId },
    });
    if (!isUserExist) {
      throw new NotFoundException('User with this id not found.');
    }
    return await this.prismaServise.user.delete({ where: { id: userId } });
  }
}
