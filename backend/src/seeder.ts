import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { UsersService } from "./users/users.service";
import * as bcrypt from 'bcrypt';



async function seed(){

    const app = await NestFactory.createApplicationContext(AppModule);


    const userService = app.get(UsersService);


    const userName = 'manager'
    const email = 'manager@gmail.com';
    const password = 'admin123';
    const role = 'manager';


    const existUser = await userService.findByEmail(email);

    if(!existUser){

        const hashPass = await bcrypt.hash(password , 10);
        await userService.register({ userName , email , password: hashPass , role })
        console.log(`User ${email} created successfully`);
    }else{
        console.log(`User ${email} already exists`);
    }


    await app.close();
}


seed()
.then(()=>
    
    console.log('seeding is done'))
.catch((err)=>{ 
    
    console.log('seeding faild', err);
    process.exit(1);
})