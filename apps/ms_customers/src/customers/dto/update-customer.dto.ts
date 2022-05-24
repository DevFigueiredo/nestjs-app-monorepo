import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsEmpty()
    phone: string;
}
