import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: typeof Event) {}

  async create(createEventDto: CreateEventDto) {
   await this.eventRepository.create<Event>(createEventDto as any);
  }

  findAll() {
    return this.eventRepository.findAll();
  }

  async findOne(id: number) {
    const event = await this.eventRepository.findOne({where: {
      id
    }});
    if(!event) throw new NotFoundException(`Event not found`);
    return event
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<void> {
    await this.findOne(id);
    await this.eventRepository.update(updateEventDto as any, {where: {
      id
    }});
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.eventRepository.destroy({where: {
      id
    }});
  }
}
