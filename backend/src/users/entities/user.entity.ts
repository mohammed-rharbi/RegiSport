import { Prop, Schema ,SchemaFactory } from "@nestjs/mongoose";
import { Document , Types } from "mongoose";



@Schema()
export class User extends Document {


    @Prop({required:true})
    userName: string ;

    @Prop({required:true})
    email: string ;

    @Prop({required: true})
    password: string ;

    @Prop({enum:['owner' , 'user'] , default:'user'})
    role: string ;

    @Prop({min:10 , max:15})
    phone: number ;

}

export const userShema = SchemaFactory.createForClass(User);
