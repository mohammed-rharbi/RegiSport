import { IsString , IsNotEmpty ,IsEmail   } from "class-validator";


export class LoginUserDto {


    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}
