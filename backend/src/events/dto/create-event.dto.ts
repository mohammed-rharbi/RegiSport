import { Type } from "class-transformer";
import { IsNotEmpty , IsString , IsDate, IsOptional } from "class-validator";



export class CreateEventDto {

@IsString()
@IsNotEmpty()
title: string ;

@IsDate()
@IsNotEmpty()
@Type(()=>Date)
date: Date ;

@IsString()
@IsNotEmpty()
description: string;

@IsString()
@IsNotEmpty()
location: string ;

@IsOptional()
@IsString()
image?: string ;



}
