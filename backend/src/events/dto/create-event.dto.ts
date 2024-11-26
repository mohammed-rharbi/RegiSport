import { IsNotEmpty , IsString , IsDate, IsAlpha   } from "class-validator";



export class CreateEventDto {

@IsString()
@IsNotEmpty()
@IsAlpha()
title: string ;

@IsDate()
@IsNotEmpty()
date: Date ;

@IsString()
@IsNotEmpty()
description: string;

@IsString()
@IsNotEmpty()
location: string



}
