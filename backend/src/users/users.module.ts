import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userRepositorie } from './users.repositorie';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userShema } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: User.name, schema: userShema }]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '3h' },
      }),
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, userRepositorie],
  exports: [UsersService],
})
export class UsersModule {}
