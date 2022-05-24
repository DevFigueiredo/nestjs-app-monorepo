import { FirebaseService } from '@app/firebase_auth';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(private readonly firebaseService: FirebaseService) {}
  async create(createCustomerDto: CreateCustomerDto) {
    const user = await this.firebaseService.auth().createUser({
      emailVerified: true,
       displayName: createCustomerDto.name,
       email: createCustomerDto.email,
       phoneNumber: createCustomerDto.phone
      }).catch(err => {
      if(err.code === 'auth/email-already-exists') {
        throw new BadRequestException("Email already exists");
    }}) as UserRecord;

    return { id: user.uid };
  }


  async findOne(id: string): Promise<Customer> {
    const user = await this.firebaseService.auth().getUser(id).catch(err => {
      throw new NotFoundException("User not found");
    });

    return {
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber
    }
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
     await this.findOne(id);
     await this.firebaseService.auth().updateUser(id,{
      emailVerified: true,
       displayName: updateCustomerDto.name,
       email: updateCustomerDto.email,
       phoneNumber: updateCustomerDto.phone
    });
  }

  async remove(id: string) {
     await this.findOne(id);
     await this.firebaseService.auth().deleteUser(id);
  }
}
