import { IsString , IsNotEmpty ,IsEmail   } from "class-validator";


export class CreateUserDto {


    @IsString()
    @IsNotEmpty()
    @IsEmail()
    userName: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}
