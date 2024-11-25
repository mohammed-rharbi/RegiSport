import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userRepositorie } from './users.repositorie';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userShema } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[ MongooseModule.forFeature([{name: User.name , schema: userShema}]),

            JwtModule.register({
              secret: process.env.JWT_SECRET || 'bed10b00c005dbaeb2a8d215bbdeeb0d5407b88db328483ed0b0b7a395b52e57' ,
              signOptions: {expiresIn:'3h'},  
            })

],

  controllers: [UsersController],
  providers: [UsersService , userRepositorie],
})
export class UsersModule {}
