import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
export declare class FrDateService {
    dateValidate: any;
    subject: Subject<any>;
    focusOnTextBox: string;
    dateDialogType: string;
    constructor();
    dateFormating(dataString: any): any;
    getDay(selectedDataTextboxArray: any): number;
    getMonth(selectedDataTextboxArray: any): number;
    getYear(selectedDataTextboxArray: any): number;
    replaceDateSeperator(dateString: any): any;
    getDialogType(type: any): void;
    filterOn(id: string): Observable<any>;
    emit(id: string, options?: any): void;
}
