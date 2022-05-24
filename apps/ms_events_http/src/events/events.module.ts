import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { eventProvider } from './providers/Event';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './entities/event.entity';

@Module({
  imports: [SequelizeModule.forFeature([Event]),],
  controllers: [EventsController],
  providers: [EventsService,
    ...eventProvider]
})
export class EventsModule {}
