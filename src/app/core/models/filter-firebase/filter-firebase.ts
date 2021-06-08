export interface IFilterFirebase {
    searchdata: string;
    value: string | number;
}

export class FilterFirebase implements IFilterFirebase {
    searchdata: string;
    value: string | number;

    constructor(tax: IFilterFirebase) {
        this.searchdata = tax.searchdata;
        this.value = tax.value;
    }

}