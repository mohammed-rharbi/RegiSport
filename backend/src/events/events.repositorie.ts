import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event } from "./entities/event.entity";
import { Model, Types } from "mongoose";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";


@Injectable()

export class EventRepositorie {

    constructor(@InjectModel(Event.name) private readonly eventModel : Model<Event> ){}


        async create(eventData :  CreateEventDto ): Promise<Event>{

        const event = new this.eventModel(eventData);

        return await event.save()

        }

        async findById(id: string): Promise<Event>{

            return await this.eventModel.findById(id).populate('participants').exec();
        }

        async getAllEvents(): Promise<Event[]>{


            return await this.eventModel.find().populate('participants').exec();

        }

        async update(id: string , eventData : UpdateEventDto): Promise<Event | null>{
           console.log(eventData);
           
            return await this.eventModel.findByIdAndUpdate(id , eventData , {new: true}).exec();
        }


        async delete(id: string ): Promise<{message: string}>{

            const event =  await this.eventModel.findByIdAndDelete(id).exec();

            if(!event){
                throw new BadRequestException('event does not exist');
            }

            return {message: 'event deletd successfully'};
        }


        async getUserEvents(userId:string): Promise<Event[]>{


            const userObject = new Types.ObjectId(userId) 

            return await this.eventModel.find({participants: userObject}).populate('participants').exec()

        }


}