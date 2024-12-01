import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventRepositorie } from './events.repositorie';
import { Event } from './entities/event.entity';
import { UsersService } from 'src/users/users.service';
import { Types } from 'mongoose';

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


async addParticipant(eventId: string, userIds: string[]): Promise<{ message: string }> {
  try {

    const event = await this.eventRepository.findById(eventId);

    if (!event) {
      throw new NotFoundException('Event not found');
    }


    const userObjectIds = userIds.map(id => new Types.ObjectId(id))


    const users = await this.userService.findUsersById(userObjectIds)

    if (users.length !== userIds.length) {
      throw new NotFoundException('One or more users not found');
    }


    const newUsers = userObjectIds.filter(userId =>
      !event.participants.some(participantId => participantId.equals(userId)),
    );

    if (newUsers.length === 0) {
      throw new BadRequestException('All selected users are already participants');
    }


    event.participants.push(...newUsers);


    await event.save();


    return { message: `${newUsers.length} participant(s) added successfully` };
  } catch (error) {
    console.error('Error adding participants:', error);
    throw new BadRequestException('Error adding participants');
  }
}


  async removeParticipent(eventId: string , userId: string): Promise<{message: string}>{


    try{


      return {message: 'participent deleted successfully'};

    }catch(err){

      throw new NotFoundException('error during removing participent', err)
    }

  }


  async getUserEvents(userId: string): Promise<Event[]>{

    try {

      
      const userEvents = await this.eventRepository.getUserEvents(userId)

      

      if(!userEvents || userEvents.length === 0){

        throw new NotFoundException('no events ben found');

      }

      return userEvents
      
    } catch (error) {

      throw new BadRequestException('error during fetching events',error);
      
    }
  }
}
