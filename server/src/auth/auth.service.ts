import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from 'src/auth/dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async register(registerDto: RegisterDto) {
    const userExist = await this.usersService.findByEmail(registerDto.email);

    if (userExist) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashPassword = await bcrypt.hash(registerDto.password, 5);

    const user = this.usersService.create({
      ...registerDto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);
    const isPasswordCorrect = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (user && isPasswordCorrect) {
      const token = this.generateToken(user);
      return token;
    }

    throw new BadRequestException('Incorrect e-mail or password');
  }

  private async generateToken(user) {
    const data = {
      firstName: user.firstname,
      lastName: user.lastName,
      email: user.email,
    };
    return {
      token: await this.jwtService.sign(data),
    };
  }
}
