
import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SendMailDto {

    @IsString()
    @Type(() => String)
    name: string;

    @IsEmail()
    @Type(() => String)
    email: string;

    @IsString()
    @Type(() => String)
    message: string;

}