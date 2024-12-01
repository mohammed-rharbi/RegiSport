import { Test, TestingModule } from '@nestjs/testing';
import { EventsService } from './events.service';
import { EventRepositorie } from './events.repositorie';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
describe('EventsService', () => {
  let service: EventsService;
  let eventRepository: EventRepositorie;
  let usersService: UsersService;

  beforeEach(async () => {
    const eventRepositoryMock = {
      create: jest.fn(),
      getAllEvents: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      getUserEvents: jest.fn(),
    };

    const usersServiceMock = {
      findUsersById: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsService,
        { provide: EventRepositorie, useValue: eventRepositoryMock },
        { provide: UsersService, useValue: usersServiceMock },
      ],
    }).compile();

    service = module.get<EventsService>(EventsService);
    eventRepository = module.get<EventRepositorie>(EventRepositorie);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create an event successfully', async () => {
      const eventData = { title: 'Test Event', date: new Date(), description: 'Description', location: 'Location' };
      (eventRepository.create as jest.Mock).mockResolvedValue(eventData);  // Ensure correct typing

      const result = await service.create(eventData);
      expect(result).toEqual(eventData);
      expect(eventRepository.create).toHaveBeenCalledWith(eventData);
    });

    it('should throw a BadRequestException when error occurs', async () => {
      const eventData = { title: 'Test Event', date: new Date(), description: 'Description', location: 'Location' };
      (eventRepository.create as jest.Mock).mockRejectedValue(new Error('Something went wrong'));  // Ensure correct typing

      await expect(service.create(eventData)).rejects.toThrow(BadRequestException);
    });
  });

  describe('findAll', () => {
    it('should return all events', async () => {
      const events = [{ title: 'Test Event 1', date: new Date(), description: 'Description', location: 'Location' }];
      (eventRepository.getAllEvents as jest.Mock).mockResolvedValue(events);  // Ensure correct typing

      const result = await service.findAll();
      expect(result).toEqual(events);
      expect(eventRepository.getAllEvents).toHaveBeenCalled();
    });

    it('should throw a NotFoundException if no events found', async () => {
      (eventRepository.getAllEvents as jest.Mock).mockResolvedValue(null);  // Ensure correct typing

      await expect(service.findAll()).rejects.toThrow(NotFoundException);
    });
  });

  describe('findEventById', () => {
    it('should return an event by id', async () => {
      const event = { id: '1', title: 'Test Event', date: new Date(), description: 'Description', location: 'Location' };
      (eventRepository.findById as jest.Mock).mockResolvedValue(event);  // Ensure correct typing

      const result = await service.findEventById('1');
      expect(result).toEqual(event);
      expect(eventRepository.findById).toHaveBeenCalledWith('1');
    });

    it('should throw a NotFoundException if event not found', async () => {
      (eventRepository.findById as jest.Mock).mockResolvedValue(null);  // Ensure correct typing

      await expect(service.findEventById('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update an event successfully', async () => {
      const updatedEvent = { title: 'Updated Event', date: new Date(), description: 'Updated Description', location: 'Updated Location' };
      (eventRepository.findById as jest.Mock).mockResolvedValue({ id: '1' });
      (eventRepository.update as jest.Mock).mockResolvedValue(updatedEvent);  // Ensure correct typing

      const result = await service.update('1', updatedEvent);
      expect(result).toEqual(updatedEvent);
      expect(eventRepository.findById).toHaveBeenCalledWith('1');
      expect(eventRepository.update).toHaveBeenCalledWith('1', updatedEvent);
    });

    it('should throw NotFoundException if event not found', async () => {
      (eventRepository.findById as jest.Mock).mockResolvedValue(null);  // Ensure correct typing

      await expect(service.update('1', { title: 'Updated Event' })).rejects.toThrow(NotFoundException);
    });
  });

  describe('getUserEvents', () => {
    it('should return user events successfully', async () => {
      const events = [{ title: 'User Event', date: new Date(), description: 'Description', location: 'Location' }];
      (eventRepository.getUserEvents as jest.Mock).mockResolvedValue(events);  // Ensure correct typing

      const result = await service.getUserEvents('userId');
      expect(result).toEqual(events);
      expect(eventRepository.getUserEvents).toHaveBeenCalledWith('userId');
    });

    it('should throw NotFoundException if no events found', async () => {
      (eventRepository.getUserEvents as jest.Mock).mockResolvedValue([]);  // Ensure correct typing

      await expect(service.getUserEvents('userId')).rejects.toThrow(NotFoundException);
    });
  });
});
