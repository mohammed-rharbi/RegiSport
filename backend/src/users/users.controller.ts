import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post('register')
  async register(@Body() userData: CreateUserDto): Promise<{message: string}> {

    return await this.usersService.register(userData);
  }

  @Post('login')
  async login(@Body() userData: LoginUserDto): Promise<{token: string}> {

    return await this.usersService.login(userData);
  }


   @Get('getAllUsers')
    async findAll() {

    return await this.usersService.findAll();
  }


  @Get('getUserById/:id')

  async findOne(@Param('id') id: string): Promise<User> {

    return await this.usersService.findUserById(id);
  }



  @Patch('updateUser/:id')
  update(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    
    return this.usersService.update(id , userData)
  }


  @Delete('deleteUser/:id')
  
  async deleteUser(@Param('id') id: string) {

    return await this.usersService.remove(id);
  }
}
