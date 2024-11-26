import { Document } from "mongoose";
import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";




export class Event extends Document {


    @Prop({required:true})
    title: string ;

    @Prop({required: true})
    image: string ;

    @Prop({required: true})
    desc: string ;



  





}

