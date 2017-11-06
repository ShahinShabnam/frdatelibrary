import { OnInit, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FrDateService } from '../fr-date.service';
export declare class FrDateComponent implements OnInit, AfterViewInit {
    private datePipe;
    private frDateService;
    zIndexDialog: number;
    cellTemplate: string;
    selectedDateCalender: Date;
    selectedDateTextbox: any;
    selectedDateTextboxFrom: any;
    selectedDateTextboxTo: any;
    isDxCalenderVisible: boolean;
    focusOnTextBox: string;
    dateValidate: any;
    dxCalenderType: string;
    constructor(datePipe: DatePipe, frDateService: FrDateService);
    ngOnInit(): void;
    private onValueChangedDate();
    ngAfterViewInit(): void;
    private closeDateDialog();
    private openDxCalender(dxCalenderType);
    private resetSelectedDateCalender(selectedTextbox);
    private closeDxCalender();
    private windowKeyUp(event);
    getCellCssClass(date: any): string;
}
