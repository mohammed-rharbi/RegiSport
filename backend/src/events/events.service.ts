import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventRepositorie } from './events.repositorie';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {

  constructor( private readonly eventRepository: EventRepositorie ){}



  async  create(eventDataDto: CreateEventDto ): Promise<Event> {
    
    try{

 
      return await this.eventRepository.create(eventDataDto)

    }catch(err: any){ 

      throw new BadRequestException('error while creating the event' + err)

    }
  }

  async findAll(): Promise<Event[]> {

    const events = await this.eventRepository.getAllEvents();

    if(!events){

      throw new NotFoundException('no events ben found');
    }

    return events

  }

  async findEventById(id: string): Promise<Event> {

    const event = await this.eventRepository.findById(id)

    if(!event){

      throw new NotFoundException('no event found');

    }

    return event 
  }


  async update(id: string, updateEventDto: UpdateEventDto) {


    try{

      const event = await this.eventRepository.findById(id);

      if(!event){
        throw new NotFoundException('no event found');
      }

      return await this.eventRepository.update(id , updateEventDto);


    }catch(err: any){

      throw new BadRequestException('error while updating event')

    }

    
  }

  async remove(id: string): Promise<{message: string}> {

    return await this.eventRepository.delete(id);
    
  }
}
