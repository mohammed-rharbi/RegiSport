import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userRepositorie } from './users.repositorie';

@Module({
  controllers: [UsersController],
  providers: [UsersService , userRepositorie],
})
export class UsersModule {}
