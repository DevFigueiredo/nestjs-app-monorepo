import { Module } from '@nestjs/common';
import { MsEventsHttpController } from './ms_events_http.controller';
import { MsEventsHttpService } from './ms_events_http.service';
import { EventsModule } from './events/events.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'sqlite',
    autoLoadModels: true,
    host: join(__dirname, "..","..", "..", 'database.sqlite'),
    synchronize: true
  }),EventsModule],
  controllers: [MsEventsHttpController],
  providers: [MsEventsHttpService],
})
export class MsEventsHttpModule {}
