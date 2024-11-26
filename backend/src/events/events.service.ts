import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventRepositorie } from './events.repositorie';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {

  constructor( private readonly eventRepository: EventRepositorie ){}



  async  create(eventDataDto: CreateEventDto): Promise<Event> {

    try{


      return await this.eventRepository.create(eventDataDto)

    }catch(err: any){

      throw new BadRequestException('error while creating the event' + err)

    }
  }

  findAll() {
    return `This action returns all events`;
  }

  findOne(id: string) {
    return `This action returns a #${id} event`;
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: string) {
    return `This action removes a #${id} event`;
  }
}
