import { Test, TestingModule } from '@nestjs/testing';
import { EventsService } from './events.service';
import { EventRepositorie } from './events.repositorie';
import { UsersService } from '../users/users.service';  // Import UsersService

describe('EventsService', () => {
  let service: EventsService;

  const mockEventRepositorie = {
    findAll: jest.fn(),
    findById: jest.fn(),
    save: jest.fn(),
  };

  const mockUsersService = {
    findUserById: jest.fn().mockResolvedValue({
      id: '1',
      username: 'User 1',
      email: 'user1@example.com',
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsService,
        { provide: EventRepositorie, useValue: mockEventRepositorie },
        { provide: UsersService, useValue: mockUsersService }, 
      ],
    }).compile();

    service = module.get<EventsService>(EventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
