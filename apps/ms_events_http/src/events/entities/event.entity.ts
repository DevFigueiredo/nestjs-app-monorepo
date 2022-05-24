import { Table, Column, Model } from 'sequelize-typescript'

@Table({
    tableName: 'events',
})
export class Event extends Model {
    @Column
    name: string;
    @Column
    formattedDescription: string;
    @Column
    description: string;
    @Column
    startDate: Date;
    @Column
    endDate: Date;
    @Column
    URL: string;
    @Column
    rules: string;
    @Column({values: ['draft', 'published', 'canceled', 'finished']})
    status: string;

}