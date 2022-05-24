import { EventStatus } from "../entities/event.status.entity";

export class CreateEventDto {
    name: string;
    formattedDescription: string;
    description: string;
    startDate: Date;
    endDate: Date;
    URL: string;
    rules: string;
    status: EventStatus;
}

