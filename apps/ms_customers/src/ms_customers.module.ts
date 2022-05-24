import { Module } from '@nestjs/common';
import { join } from 'path';
import { CustomersModule } from './customers/customers.module';
import {SequelizeModule} from '@nestjs/sequelize'

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'sqlite',
    autoLoadModels: true,
    host: join(__dirname, "..","..", "..", 'database.sqlite'),
    synchronize: true
  }), CustomersModule],
  controllers: [],
  providers: [],
})
export class MsCustomersModule {}
