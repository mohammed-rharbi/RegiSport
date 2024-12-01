import { Test, TestingModule } from '@nestjs/testing';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Type } from 'class-transformer';

describe('EventsController', () => {
  let controller: EventsController;
  let service: EventsService;

  const mockEventsService = {
    create: jest.fn().mockResolvedValue({ message: 'event created successfully' }),
    findAll: jest.fn().mockResolvedValue([
      { id: '1', title: 'Event 1', date: new Date(), description: 'Description', location: 'Location 1' },
      { id: '2', title: 'Event 2', date: new Date(), description: 'Description', location: 'Location 2' },
    ]),
    findEventById: jest.fn().mockResolvedValue({ id: '1', title: 'Event 1', date: new Date(), description: 'Description', location: 'Location 1' }),
    update: jest.fn().mockResolvedValue({ message: 'event updated successfully' }),
    remove: jest.fn().mockResolvedValue({ message: 'event removed successfully' }),
    addParticipant: jest.fn().mockResolvedValue({ message: 'participants added' }),
    getUserEvents: jest.fn().mockResolvedValue([
      { id: '1', title: 'Event 1', date: new Date(), description: 'Description', location: 'Location 1' },
      { id: '2', title: 'Event 2', date: new Date(), description: 'Description', location: 'Location 2' },
    ]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [
        {
          provide: EventsService,
          useValue: mockEventsService,
        },
      ],
    }).compile();

    controller = module.get<EventsController>(EventsController);
    service = module.get<EventsService>(EventsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {

  it('should create an event', async () => {
  const createEventDto: CreateEventDto = {
    title: 'Event 1',
    date: new Date(),
    description: 'Description',
    location: 'Location 1',
  };
  const result = await controller.CreateEvent(createEventDto, null); 

  expect(result).toEqual({ message: 'event created successfully' });
  expect(service.create).toHaveBeenCalledWith(createEventDto);
});


    it('should throw a BadRequestException when error occurs', async () => {
      const createEventDto: CreateEventDto = {
        title: 'Event 1',
        date: new Date(),
        description: 'Description',
        location: 'Location 1',
      };
      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error('Some error'));

      await expect(controller.CreateEvent(createEventDto, null)).rejects.toThrow(BadRequestException);
    });

    it('should correctly handle image upload', async () => {
      const createEventDto: CreateEventDto = {
        title: 'Event 1',
        date: new Date(),
        description: 'Description',
        location: 'Location 1',
      };
      const image: Express.Multer.File = { filename: 'test-image.jpg' } as any;  

      const result = await controller.CreateEvent(createEventDto, image);

      expect(result.message).toBe('event created successfully');
      expect(createEventDto.image).toBe('test-image.jpg'); 
      expect(service.create).toHaveBeenCalledWith(createEventDto);
    });
  });

  describe('findAll', () => {
    it('should return all events', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([
        { id: '1', title: 'Event 1', date: new Date(), description: 'Description', location: 'Location 1' },
        { id: '2', title: 'Event 2', date: new Date(), description: 'Description', location: 'Location 2' },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });

    it('should throw a NotFoundException when no events are found', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValueOnce([]);

      await expect(controller.findAll()).rejects.toThrow(NotFoundException);
    });
  });

  describe('findOne', () => {
    it('should return one event', async () => {
      const result = await controller.findOne('1');
      expect(result).toEqual({ id: '1', title: 'Event 1', date: new Date(), description: 'Description', location: 'Location 1' });
      expect(service.findEventById).toHaveBeenCalledWith('1');
    });

    it('should throw a NotFoundException if event does not exist', async () => {
      jest.spyOn(service, 'findEventById').mockResolvedValueOnce(null);

      await expect(controller.findOne('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {

   it('should update an event', async () => {
  const updateEventDto: UpdateEventDto = {
    title: 'Updated Event',
    date: new Date(),
    description: 'Updated Description',
    location: 'Updated Location',
  };
  const result = await controller.updateEvent('1', updateEventDto, null); 
  expect(result).toEqual({ message: 'event updated successfully' }); 
  expect(service.update).toHaveBeenCalledWith('1', updateEventDto);
});


    it('should throw a BadRequestException when error occurs', async () => {
      const updateEventDto: UpdateEventDto = {
        title: 'Updated Event',
        date: new Date(),
        description: 'Updated Description',
        location: 'Updated Location',
      };
      jest.spyOn(service, 'update').mockRejectedValueOnce(new Error('Some error'));

      await expect(controller.updateEvent('1', updateEventDto, null)).rejects.toThrow(BadRequestException);
    });
  });

  describe('remove', () => {
   it('should remove an event', async () => {
  const result = await controller.removeEvent('1');
  expect(result).toEqual({ message: 'event removed successfully' }); 
  expect(service.remove).toHaveBeenCalledWith('1');
});


    it('should throw a BadRequestException when error occurs', async () => {
      jest.spyOn(service, 'remove').mockRejectedValueOnce(new Error('Some error'));

      await expect(controller.removeEvent('1')).rejects.toThrow(BadRequestException);
    });
  });

  describe('addParticipant', () => {
    it('should add participants to an event', async () => {
      const result = await controller.addParticipent('1', ['user1', 'user2']);
      expect(result.message).toBe('participants added');
      expect(service.addParticipant).toHaveBeenCalledWith('1', ['user1', 'user2']);
    });

    it('should throw a BadRequestException if userIds is invalid', async () => {
      await expect(controller.addParticipent('1', []))
        .rejects
        .toThrow(BadRequestException);
    });
  });

  describe('getUserEvents', () => {
    it('should return events for a user', async () => {
      const result = await controller.getUserEvents('user1');
      expect(result).toEqual([
        { id: '1', title: 'Event 1', date: new Date(), description: 'Description', location: 'Location 1' },
        { id: '2', title: 'Event 2', date: new Date(), description: 'Description', location: 'Location 2' },
      ]);
      expect(service.getUserEvents).toHaveBeenCalledWith('user1');
    });

    it('should throw a BadRequestException if there is an error fetching user events', async () => {
      jest.spyOn(service, 'getUserEvents').mockRejectedValueOnce(new Error('Some error'));

      await expect(controller.getUserEvents('user1')).rejects.toThrow(BadRequestException);
    });
  });
});
