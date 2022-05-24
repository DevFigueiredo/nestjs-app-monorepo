import { Event } from "../entities/event.entity";

export const eventProvider = [
  {
    provide: 'EVENT_REPOSITORY',
    useValue: Event,
  },
];