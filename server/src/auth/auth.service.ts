import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from 'src/auth/dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const userExist = await this.usersService.findByEmail(registerDto.email);

    if (userExist) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashPassword = await bcrypt.hash(registerDto.password, 5);

    const user = await this.usersService.create({
      ...registerDto,
      password: hashPassword,
    });

    return await this.generateToken(user);
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

  async decodeToken(token: string) {
    return await this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });
  }

  private async generateToken(user) {
    const data = {
      firstName: user.firstname,
      lastName: user.lastName,
      email: user.email,
    };
    return {
      token: this.jwtService.sign(data),
    };
  }
}
