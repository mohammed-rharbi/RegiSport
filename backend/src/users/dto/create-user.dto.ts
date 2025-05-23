import { IsString , IsNotEmpty ,IsEmail, MinLength , MaxLength , IsOptional , IsIn  } from "class-validator";


export class CreateUserDto {


    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(15)
    password: string;

    @IsString()
    @IsOptional()
    @IsIn(['participant' , 'manager'])
    role?: string

}
