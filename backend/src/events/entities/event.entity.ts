import { Document } from "mongoose";
import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/users/entities/user.entity";




export class Event extends Document {


    @Prop({required:true})
    title: string ;

    @Prop({required: true})
    image: string ;

    @Prop({required: true})
    date: Date ;

    @Prop({required: true})
    description: string ;

    @Prop({required: true})
    location: string ;

    @Prop({ type: [User] , default: []})
    participants : User[];
}


export const EventShema = SchemaFactory.createForClass(Event);
