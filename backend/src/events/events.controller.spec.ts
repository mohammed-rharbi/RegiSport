import { Test, TestingModule } from '@nestjs/testing';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { UsersService } from 'src/users/users.service';
import { CreateEventDto } from './dto/create-event.dto';

describe('EventsController', () => {
  let controller: EventsController;
  let service: UsersService;



  beforeEach(async () => {


    const mockEventsService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findEventById: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [{ provide: EventsService , useValue: mockEventsService }],
    }).compile();

    controller = module.get<EventsController>(EventsController);
    service = module.get(EventsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  // describe('createEvent' , ()=>{

  //   it('it should create an event and return success message' , async ()=>{

  //     const createEventDto : CreateEventDto = { title: 'example event'}
  //   })
  // })


});
