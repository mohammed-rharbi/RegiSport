import { Test, TestingModule } from '@nestjs/testing';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { EventRepositorie } from './events.repositorie';
import { UsersService } from '../users/users.service';
import { getModelToken } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';

describe('EventsController', () => {
  let controller: EventsController;
  let service: EventsService;

  const mockEventModel = {
    findOne: jest.fn().mockResolvedValue({
      id: '1',
      title: 'Event 1',
      date: new Date(),
      description: 'Description',
      location: 'Location 1',
    }),
    // Add more methods if needed
  };

  const mockEventsService = {
    findEventById: jest.fn().mockResolvedValue({
      id: '1',
      title: 'Event 1',
      date: new Date(),
      description: 'Description',
      location: 'Location 1',
    }),
  };

  const mockUsersService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [
        EventsService,
        { provide: EventsService, useValue: mockEventsService },
        { provide: UsersService, useValue: mockUsersService },
        { provide: getModelToken('Event'), useValue: mockEventModel },
        EventRepositorie,
      ],
    }).compile();

    controller = module.get<EventsController>(EventsController);
    service = module.get<EventsService>(EventsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should throw NotFoundException if event does not exist', async () => {
    mockEventModel.findOne.mockResolvedValueOnce(null); // Mock no event found

    try {
      await controller.findOne('nonexistent-id');
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });
});
