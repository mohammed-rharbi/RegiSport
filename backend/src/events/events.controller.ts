import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseInterceptors, UploadedFile, NotFoundException } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('events')
export class EventsController {

  constructor(private readonly eventsService: EventsService) {}



  @Post('create/event')
  @UseInterceptors(
    FileInterceptor('image', {

          storage: diskStorage({
              destination: './uploads',
              filename:(req , file , callback)=>{
              const uniqueName = `${Date.now()}-${file.originalname}`;
              callback(null , uniqueName);
            },
          }),
          }
  ))
    async CreateEvent(@Body() createEventDto: CreateEventDto , @UploadedFile() image: Express.Multer.File ): Promise<{ message: string}> {

    try{

      if(image){
        createEventDto.image = image.filename;
      }

    const event = await this.eventsService.create(createEventDto);

    return {message: 'event created successfully'}

    }catch(err: any){

      throw new BadRequestException('error for creating event' + err);
    }

  }


  @Get('get/events')
  async findAll() {

    try{

      const events =  await this.eventsService.findAll();

      if(!events){

        throw new NotFoundException('no events found')
      }

      return events

    }catch(err: any){

      throw new BadRequestException('error while fetching events', err)
    }
  }




  @Get('getEvent/:id')
  async findOne(@Param('id') id: string) {
  
    try{

       const event =  await this.eventsService.findEventById(id)

      if(!event){

        throw new NotFoundException('no events found')
      }

      return event


    }catch(err: any){

      throw new BadRequestException('error while getting event', err)
    }
  }

  

  @Patch('update/event/:id')
  @UseInterceptors(
    FileInterceptor('image', {

          storage: diskStorage({
              destination: './uploads',
              filename:(req , file , callback)=>{
              const uniqueName = `${Date.now()}-${file.originalname}`;
              callback(null , uniqueName);
            },
          }),
          }
  ))
  async updateEvent(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto , @UploadedFile() image: Express.Multer.File) {


    if(image){
      updateEventDto.image = image.filename
    }

    return this.eventsService.update(id, updateEventDto);
  }



  @Delete('delete/event/:id')
  async removeEvent(@Param('id') id: string) {

    return await this.eventsService.remove(id);
  }


  @Patch(':eventId/addParticipent')
  async addParticipent(@Param('eventId') eventId: string , @Body('userIds') userIds: string[] ){

    try {


      if (!Array.isArray(userIds) || userIds.length === 0) {
        throw new BadRequestException('User IDs must be a non-empty array');
      }
      
      
      return await this.eventsService.addParticipant(eventId , userIds)

     
    } catch (error) {

      throw new BadRequestException('error adding participent')
      
    }
  }


  @Get(':userId/userEvents')
  async getUserEvents(@Param('userId') userId: string ){


    try {

      const userEvents = await this.eventsService.getUserEvents(userId);

      
      return userEvents
      
    } catch (error) {

      throw new BadRequestException('error while fetching user events')
      
    }

  }
}
