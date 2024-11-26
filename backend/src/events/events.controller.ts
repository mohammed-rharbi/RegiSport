import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseInterceptors } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Controller('events')
export class EventsController {

  constructor(private readonly eventsService: EventsService) {}



  @Post('create/event')
  async create(@Body() createEventDto: CreateEventDto): Promise<{message: string}> {

    try{

    const event = await this.eventsService.create(createEventDto);

    return {message: 'event created successfully'}

    }catch(err: any){

      throw new BadRequestException('error for creating event' + err);
    }


  }


  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}
