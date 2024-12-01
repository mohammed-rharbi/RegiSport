import { Document , Types } from "mongoose";
import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/users/entities/user.entity";



@Schema()
export class Event extends Document {


    @Prop({required:true})
    title: string ;

    @Prop({required: false})
    image: string ;

    @Prop({required: true})
    date: Date ;

    @Prop({required: true})
    description: string ;

    @Prop({required: true})
    location: string ;

    @Prop({ type: [Types.ObjectId] , ref:'User', default: []})
    participants : Types.ObjectId[]
}


export const EventShema = SchemaFactory.createForClass(Event);
