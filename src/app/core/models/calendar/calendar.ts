export interface ICalendar {
    id: number;
    text: string;
    selectable: boolean;
    description: { order: number, text: string }[];
    selected?: boolean;
}

export class Calendar implements ICalendar {
    id: number;
    text: string;
    selectable: boolean;
    description: { order: number, text: string }[];
    selected?: boolean;

    constructor(calendar: ICalendar) {
        this.id = calendar.id;
        this.text = calendar.text;
        this.selectable = calendar.selectable;
        this.description = calendar.description;
        this.selected = calendar.selected;
    }

}