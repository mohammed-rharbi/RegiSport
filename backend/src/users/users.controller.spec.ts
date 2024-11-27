import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { register } from 'module';
import { userShema } from './entities/user.entity';

describe('UsersController', () => {

  let controller: UsersController;
  let service: UsersService;


  const MockService = {
    register: jest.fn(),
    login: jest.fn(),
    findAll: jest.fn(),
    findUserById: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [  { provide: UsersService , useValue: MockService } ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  describe('register', ()=>{


    it('should call UserService.register with correct data' , async ()=>{

      const createDto : CreateUserDto = { userName: 'test' , email: 'test@example.com' , password: '1245678' };

      MockService.register.mockResolvedValue({message : 'user registerd successfully'});

      const result = await controller.register(createDto) ;

      expect(service.register).toHaveBeenCalledWith(createDto);
      expect(result).toEqual({message: 'user registerd successfully'});
    });
  });


  
  describe('login', ()=>{


    it('should call UserService.login with correct data' , async ()=>{

      const userData : LoginUserDto = { email: 'test@example.com' , password: '1245678' };

      MockService.login.mockResolvedValue({token : 'someToken'});

      const result = await controller.login(userData) ;

      expect(service.login).toHaveBeenCalledWith(userData);
      expect(result).toEqual({token: 'someToken'})
    });
  });



  describe('findOne', ()=>{


    it('should call UserService.findUserById with user correct id  ' , async ()=>{

      const user = {id: '123' , userName: 'exampleName' , email: 'example@gmail.com '}

      MockService.findUserById.mockResolvedValue(user);

      const result = await controller.findOne(user.id);

      expect(service.findUserById).toHaveBeenCalledWith(user.id);
      expect(result).toEqual(user);
    });
  });


  
  describe('update', ()=>{


    it('should call UserService.update with id and updated user data ' , async ()=>{

      const userdata : UpdateUserDto = { userName: 'exampleName' , email: 'example@gmail.com', password:'12345678' }

      const updatedUser = { id: '1' , userName: 'mohammed' , email: 'mohammed@gmail.com' , password: '12345678'};

      MockService.update.mockResolvedValue(updatedUser);

      const result = await controller.update( '1' , updatedUser);

      expect(service.update).toHaveBeenCalledWith('1', updatedUser);
      expect(result).toEqual(updatedUser);
    });
  });



  describe('remove', ()=>{


    it('should call UserService.remove with correct id' , async ()=>{

      
      const user = { id: '1' , userName: 'mohammed' , email: 'mohammed@gmail.com' , password: '12345678'};

      MockService.remove.mockResolvedValue({message: 'User deleted successfully'});

      const result = await controller.deleteUser(user.id);

      expect(service.remove).toHaveBeenCalledWith(user.id);
      expect(result).toEqual({message : 'User deleted successfully'});
    });
  });



});
