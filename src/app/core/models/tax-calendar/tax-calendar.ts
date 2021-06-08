export interface ITaxCalendar {
    date: { year: number, mounth: number, day: number };
    description: { order: number, text: string }[];
}

export class TaxCalendar implements ITaxCalendar {
    date: { year: number, mounth: number, day: number };
    description: { order: number, text: string }[];

    constructor(tax: ITaxCalendar) {
        this.date = tax.date;
        this.description = tax.description;
    }

}