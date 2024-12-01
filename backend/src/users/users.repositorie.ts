import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User , userShema } from "./entities/user.entity";
import { Model, Types } from "mongoose";
import { UpdateUserDto } from "./dto/update-user.dto";



@Injectable()
export class userRepositorie {

    constructor(@InjectModel(User.name) private userModel : Model<User>){}


    async create(userData: CreateUserDto ): Promise<User>{

        const user =  new this.userModel(userData);
        return user.save();

    }


    async findAll() : Promise<User[]>{

        return await this.userModel.find({role: 'participant'}).exec();
    }


    async findByEmail (email: string) : Promise<User>{

        return await this.userModel.findOne({email}).exec();
    }


    async findById(id : string): Promise<User>{

        return await this.userModel.findOne({_id: id}).exec();

    }

    async update(id: string , userData: UpdateUserDto): Promise<User>{

        return await this.userModel.findByIdAndUpdate(id , userData , {new: true}).exec();
    }


    async delete(id: string): Promise<User>{
        
        return await this.userModel.findByIdAndDelete(id).exec();
    }


    async findUsersById(usersId : Types.ObjectId[]): Promise<User[]>{


        return this.userModel.find({_id: {$in: usersId}}).exec();

    }




}
