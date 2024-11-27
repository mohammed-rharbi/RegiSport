import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [ ConfigModule.forRoot({isGlobal: true}) ,
             MongooseModule.forRoot(process.env.DB),
             UsersModule,
             EventsModule,
             MulterModule.register({
              dest: './uploads'
             }),
             
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
