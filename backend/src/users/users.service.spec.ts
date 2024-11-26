import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { userRepositorie } from './users.repositorie';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let jwtService : JwtService;
  let repository : userRepositorie ;

  beforeEach(async () => {


    const MockRepository = {

      create: jest.fn(),
      findByEmail: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const mockJwt = {
      sign: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService ,
        
        {provide: userRepositorie , useValue: MockRepository},
        {provide: JwtService , useValue: mockJwt}

      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<userRepositorie>(userRepositorie);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  // describe('register', ()=>{

  //   it('should create a user and return a success message', async ()=>{

     
  //     const userData: CreateUserDto = {
  //       userName: 'name',
  //       email:'example@gmail.com',
  //       password: 'password123',
  //     };


      

    
  //   })


  // });





});
