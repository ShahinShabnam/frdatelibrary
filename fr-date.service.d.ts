export declare class FrDateService {
    dateValidate: any;
    focusOnTextBox: string;
    dateDialogType: string;
    constructor();
    dateFormating(dataString: any): any;
    getDay(selectedDataTextboxArray: any): number;
    getMonth(selectedDataTextboxArray: any): number;
    getYear(selectedDataTextboxArray: any): number;
    replaceDateSeperator(dateString: any): any;
    getDialogType(type: any): void;
}
