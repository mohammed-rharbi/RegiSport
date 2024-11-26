import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventRepositorie } from './events.repositorie';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventShema } from './entities/event.entity';

@Module({

  imports: [ MongooseModule.forFeature([{ name: Event.name , schema: EventShema }])] ,
  controllers: [EventsController],
  providers: [EventsService , EventRepositorie],
})
export class EventsModule {}
