import { Injectable, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { userRepositorie } from './users.repositorie';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto/login-user.dto';
import e from 'express';

@Injectable()
export class UsersService {

  constructor( private readonly userRepositorie: userRepositorie ,
               private readonly jwtService: JwtService ,
  ){}


   async register(userData: CreateUserDto): Promise<{message: string}> {

      try{

          const { userName , email ,password} = userData;

          const existUser = await this.userRepositorie.findByEmail(email);
          
          if(existUser){

            throw new UnauthorizedException('user already exist');
          }

          const hashPass = await bcrypt.hash(password , 10);

           await this.userRepositorie.create({userName , email , password: hashPass});

          return {message:'User registered successfully'} ;
          
      }catch(err: any){

          throw new NotAcceptableException('there is an error :' + err)
      }

  }

  async login( userData: LoginUserDto ): Promise<{message: string ,token: string}>{

    try{

      const {email , password} = userData;
      
      const user = await this.userRepositorie.findByEmail(email)

      if(!user || !(await bcrypt.compare(password , user.password))){

        throw new UnauthorizedException('invalid info');
      }

      const payload = { email: user.email , id: user._id};
      const token = this.jwtService.sign(payload);

      return {message:'login was success',  token} ;

    }catch(err: any){

      throw new UnauthorizedException('user could not login'+err)
    }

  }


  async findAll() : Promise<User[]> {


    try{

      const users = await this.userRepositorie.findAll();

      if(!users){
  
          throw new NotFoundException('users not found');
      }
  
      return users  

    }catch(err: any){

      throw new UnauthorizedException('there is an error '+ err)
    }
 

  }

  async findUserById(id: string): Promise<User> {

     const user =  await this.userRepositorie.findById(id);

     if(!user){
      throw new NotFoundException('user not found')
     }

     return user 
  }


  async update(id: string , userData: UpdateUserDto): Promise<User> {

    try {


      const {userName , email , password} = userData ; 


      
      const user = await this.userRepositorie.findById(id);

      if(!user){
        throw new NotFoundException('user is not found');
      }

      const hashPass = await bcrypt.hash(password , 10);

      
      const updatUser = await this.userRepositorie.update(id , {userName , email , password: hashPass});

      return updatUser

    } catch (error) {

      throw new NotFoundException('thre is an error : ', error);
      
    }

  }

  async remove(id: string): Promise<{message: string}> {


    try{

      const user = await this.userRepositorie.findById(id)

      if(!user){
        throw new NotFoundException('user not found')
      }

      await this.userRepositorie.delete(id);

      return {message: 'user deleted successfully'};

    }catch(err){

      throw new NotFoundException('thre is an error during deleting this user ', err)
    }

  }


  async findByEmail(email: string): Promise<User>{

    const user =  await this.userRepositorie.findByEmail(email);

    if(!user){

      throw new NotFoundException('the user is not found');
    }

    return user
  }
}
