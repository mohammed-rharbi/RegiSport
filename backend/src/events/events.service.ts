import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventRepositorie } from './events.repositorie';
import { Event } from './entities/event.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class EventsService {

  constructor( private readonly eventRepository: EventRepositorie , private readonly userService: UsersService ){}



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

  async addParticipant( eventId: string , userId: string): Promise<{message: string}> {

    try{

      const event = await this.eventRepository.findById(eventId);

      if(!event){
  
        throw new NotFoundException('event not found');
      }

      const user = await this.userService.findUserById(userId);

      if(!user){
  
        throw new NotFoundException('user not found');
      }

      if(event.participants.includes(user)){

        throw new BadRequestException(`user is already added to this event`);
      }

      event.participants.push(user);

      event.save()


      return {message:'participant added successfully'}

    }catch(err: any){

      throw new BadRequestException('error during add user')
    }
  }

  async removeParticipent(eventId: string , userId: string): Promise<{message: string}>{


    try{


      return {message: 'participent deleted successfully'};

    }catch(err){

      throw new NotFoundException('error during removing participent', err)
    }

  }
}
