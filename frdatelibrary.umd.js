(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('devextreme-angular')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', 'devextreme-angular'], factory) :
	(factory((global.frdatelibrary = {}),global.core,global.common,global.forms,global.devextremeAngular));
}(this, (function (exports,core,common,forms,devextremeAngular) { 'use strict';

var FrDateLibraryComponent = (function () {
    function FrDateLibraryComponent() {
    }
    return FrDateLibraryComponent;
}());
FrDateLibraryComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sample-component',
                template: "<app-fr-date></app-fr-date>"
            },] },
];
/**
 * @nocollapse
 */
FrDateLibraryComponent.ctorParameters = function () { return []; };

var FrDateService = (function () {
    function FrDateService() {
        this.dateValidate = {
            dateFormat: '',
            dateSeparator: '-',
            weekStartDate: 0,
            minYear4Y: 1900,
            maxYear4Y: 2078,
            minYear2Y: 1,
            maxYear2Y: 78
        };
        this.dateDialogType = 'date';
    }
    /**
     * @param {?} dataString
     * @return {?}
     */
    FrDateService.prototype.dateFormating = function (dataString) {
        var /** @type {?} */ todaydate = new Date();
        var /** @type {?} */ lastDay = new Date(todaydate.getFullYear(), todaydate.getMonth() + 1, 0);
        var /** @type {?} */ selectedDateTextbox = this.replaceDateSeperator(dataString);
        var /** @type {?} */ selectedDateTextboxArray = selectedDateTextbox.split(this.dateValidate.dateSeparator);
        var /** @type {?} */ dataCurrentValue = '';
        switch (this.dateValidate.dateFormat) {
            case 'dd-MM-yyyy':
                var /** @type {?} */ day = this.getDay(selectedDateTextboxArray);
                if (1 <= day && day <= lastDay.getDate()) {
                    var /** @type {?} */ month_1 = this.getMonth(selectedDateTextboxArray);
                    if (1 <= month_1 && month_1 <= 12) {
                        lastDay = new Date(todaydate.getFullYear(), month_1, 0); //calculate lastday of user define month.(ie 4/4 lastDay=30)
                        var /** @type {?} */ year_1 = this.getYear(selectedDateTextboxArray);
                        if (this.dateValidate.minYear2Y <= year_1 && year_1 <= this.dateValidate.maxYear2Y && year_1.toString().length <= 2) {
                            lastDay = new Date(year_1 + 2000, month_1, 0); //calculate lastday of user define month and year.(ie 29/2/12 lastDay=29-02-2012)
                            if (1 <= day && day <= lastDay.getDate()) {
                                dataCurrentValue = new Date(year_1 + 2000, month_1 - 1, day); //(4/4/5 Date=04-04-2005)
                            }
                        }
                        else if (this.dateValidate.minYear4Y <= year_1 && year_1 <= this.dateValidate.maxYear4Y && year_1.toString().length == 4) {
                            lastDay = new Date(year_1, month_1, 0);
                            if (1 <= day && day <= lastDay.getDate()) {
                                dataCurrentValue = new Date(year_1, month_1 - 1, day); //(4/4/1993 Date=04-04-1993)
                            }
                        }
                        else if (year_1 == 0 || isNaN(year_1)) {
                            if (1 <= day && day <= lastDay.getDate()) {
                                dataCurrentValue = new Date(todaydate.getFullYear(), month_1 - 1, day); //(4/4// Date=04-04-(currrent year or fr year))
                            }
                        }
                    }
                    else if (isNaN(month_1)) {
                        var /** @type {?} */ year_2 = this.getYear(selectedDateTextboxArray);
                        if (this.dateValidate.minYear2Y <= year_2 && year_2 <= this.dateValidate.maxYear2Y && year_2.toString().length <= 2) {
                            lastDay = new Date(year_2 + 2000, todaydate.getMonth() + 1, 0);
                            if (1 <= day && day <= lastDay.getDate()) {
                                if (this.focusOnTextBox == 'date')
                                    alert('Not a Valid Date!!!');
                                dataCurrentValue = new Date(year_2 + 2000, todaydate.getMonth(), day);
                            }
                        }
                        else if (this.dateValidate.minYear4Y <= year_2 && year_2 <= this.dateValidate.maxYear4Y && year_2.toString().length == 4) {
                            lastDay = new Date(year_2, month_1, 0);
                            if (1 <= day && day <= lastDay.getDate()) {
                                if (this.focusOnTextBox == 'date')
                                    alert('Not a Valid Date!!!');
                                dataCurrentValue = new Date(year_2, todaydate.getMonth(), day);
                            }
                        }
                        else if (year_2 == 0 || isNaN(year_2)) {
                            dataCurrentValue = new Date(todaydate.getFullYear(), todaydate.getMonth(), day); //(4/// Date=04-(currrent month or fr month)-(currrent year or fr year))
                        }
                    }
                    else if (month_1 == 0) {
                        dataCurrentValue = new Date(todaydate.getFullYear(), todaydate.getMonth(), day);
                    }
                }
                break;
            case 'MM-dd-yyyy':
                var /** @type {?} */ month = this.getMonth(selectedDateTextboxArray);
                if (1 <= month && month <= 12) {
                    lastDay = new Date(todaydate.getFullYear(), month, 0);
                    var /** @type {?} */ day_1 = this.getDay(selectedDateTextboxArray);
                    if (1 <= day_1 && day_1 <= lastDay.getDate()) {
                        var /** @type {?} */ year_3 = this.getYear(selectedDateTextboxArray);
                        if (this.dateValidate.minYear2Y <= year_3 && year_3 <= this.dateValidate.maxYear2Y && year_3.toString().length <= 2) {
                            lastDay = new Date(year_3 + 2000, month, 0);
                            if (1 <= day_1 && day_1 <= lastDay.getDate()) {
                                dataCurrentValue = new Date(year_3 + 2000, month - 1, day_1);
                            }
                        }
                        else if (this.dateValidate.minYear4Y <= year_3 && year_3 <= this.dateValidate.maxYear4Y && year_3.toString().length == 4) {
                            lastDay = new Date(year_3, month, 0);
                            if (1 <= day_1 && day_1 <= lastDay.getDate()) {
                                dataCurrentValue = new Date(year_3, month - 1, day_1);
                            }
                        }
                        else if (year_3 == 0 || isNaN(year_3)) {
                            if (1 <= day_1 && day_1 <= lastDay.getDate()) {
                                dataCurrentValue = new Date(todaydate.getFullYear(), month - 1, day_1);
                            }
                        }
                    }
                    else if (isNaN(day_1)) {
                        var /** @type {?} */ year_4 = this.getYear(selectedDateTextboxArray);
                        day_1 = todaydate.getDate();
                        if (this.dateValidate.minYear2Y <= year_4 && year_4 <= this.dateValidate.maxYear2Y && year_4.toString().length <= 2) {
                            lastDay = new Date(year_4 + 2000, month, 0);
                            if (1 <= day_1 && day_1 <= lastDay.getDate()) {
                                if (this.focusOnTextBox == 'date')
                                    alert('Not a Valid Date!!!');
                                dataCurrentValue = new Date(year_4 + 2000, month - 1, day_1);
                            }
                        }
                        else if (this.dateValidate.minYear4Y <= year_4 && year_4 <= this.dateValidate.maxYear4Y && year_4.toString().length == 4) {
                            lastDay = new Date(year_4, month, 0);
                            if (1 <= day_1 && day_1 <= lastDay.getDate()) {
                                if (this.focusOnTextBox == 'date')
                                    alert('Not a Valid Date!!!');
                                dataCurrentValue = new Date(year_4, month - 1, day_1);
                            }
                        }
                        else if (year_4 == 0 || isNaN(year_4)) {
                            if (1 <= day_1 && day_1 <= lastDay.getDate()) {
                                dataCurrentValue = new Date(todaydate.getFullYear(), month - 1, day_1);
                            }
                        }
                    }
                    else if (day_1 == 0) {
                        dataCurrentValue = new Date(todaydate.getFullYear(), month - 1, todaydate.getDate());
                    }
                }
                break;
            case 'yyyy-MM-dd':
                var /** @type {?} */ year = this.getYear(selectedDateTextboxArray);
                if (this.dateValidate.minYear2Y <= year && year <= this.dateValidate.maxYear2Y && year.toString().length <= 2) {
                    var /** @type {?} */ month_2 = this.getMonth(selectedDateTextboxArray);
                    if (1 <= month_2 && month_2 <= 12) {
                        lastDay = new Date(year + 2000, month_2, 0);
                        var /** @type {?} */ day_2 = this.getDay(selectedDateTextboxArray);
                        if (1 <= day_2 && day_2 <= lastDay.getDate()) {
                            dataCurrentValue = new Date(year + 2000, month_2 - 1, day_2); //((1-78)/4/4 Date=(2001-2078)-04-04)
                        }
                        else if (day_2 == 0 || isNaN(day_2)) {
                            if (todaydate.getDate() <= lastDay.getDate()) {
                                dataCurrentValue = new Date(year + 2000, month_2 - 1, todaydate.getDate());
                            }
                        }
                    }
                    else if (isNaN(month_2)) {
                        lastDay = new Date(year + 2000, todaydate.getMonth() + 1, 0);
                        var /** @type {?} */ day_3 = this.getDay(selectedDateTextboxArray);
                        if (1 <= day_3 && day_3 <= lastDay.getDate()) {
                            if (this.focusOnTextBox == 'date')
                                alert('Not a Valid Date!!!');
                            dataCurrentValue = new Date(year + 2000, todaydate.getMonth(), day_3);
                        }
                        else if (day_3 == 0 || isNaN(day_3)) {
                            if (todaydate.getDate() <= lastDay.getDate()) {
                                dataCurrentValue = new Date(year + 2000, todaydate.getMonth(), todaydate.getDate());
                            }
                        }
                    }
                    else if (month_2 == 0) {
                        dataCurrentValue = new Date(year + 2000, todaydate.getMonth(), todaydate.getDate());
                    }
                }
                else if (this.dateValidate.minYear4Y <= year && year <= this.dateValidate.maxYear4Y && year.toString().length == 4) {
                    var /** @type {?} */ month_3 = this.getMonth(selectedDateTextboxArray);
                    if (1 <= month_3 && month_3 <= 12) {
                        lastDay = new Date(year, month_3, 0);
                        var /** @type {?} */ day_4 = this.getDay(selectedDateTextboxArray);
                        if (1 <= day_4 && day_4 <= lastDay.getDate()) {
                            dataCurrentValue = new Date(year, month_3 - 1, day_4); //((1900-2078)/4/4 Date=(1900-2078)-04-04)
                        }
                        else if (day_4 == 0 || isNaN(day_4)) {
                            if (todaydate.getDate() <= lastDay.getDate()) {
                                dataCurrentValue = new Date(year, month_3 - 1, todaydate.getDate());
                            }
                        }
                    }
                    else if (isNaN(month_3)) {
                        lastDay = new Date(year + 2000, todaydate.getMonth() + 1, 0);
                        var /** @type {?} */ day_5 = this.getDay(selectedDateTextboxArray);
                        if (1 <= day_5 && day_5 <= lastDay.getDate()) {
                            if (this.focusOnTextBox == 'date')
                                alert('Not a Valid Date!!!');
                            dataCurrentValue = new Date(year, todaydate.getMonth(), day_5);
                        }
                        else if (day_5 == 0 || isNaN(day_5)) {
                            if (todaydate.getDate() <= lastDay.getDate()) {
                                dataCurrentValue = new Date(year, todaydate.getMonth(), todaydate.getDate());
                            }
                        }
                    }
                    else if (month_3 == 0) {
                        dataCurrentValue = new Date(year, todaydate.getMonth(), todaydate.getDate());
                    }
                }
                break;
            default:
                break;
        }
        return dataCurrentValue;
    };
    /**
     * @param {?} selectedDataTextboxArray
     * @return {?}
     */
    FrDateService.prototype.getDay = function (selectedDataTextboxArray) {
        switch (this.dateValidate.dateFormat) {
            case 'dd-MM-yyyy':
                if (selectedDataTextboxArray.length >= 1 && selectedDataTextboxArray[0].length <= 2)
                    return parseInt(selectedDataTextboxArray[0]);
                break;
            case 'MM-dd-yyyy':
                if (selectedDataTextboxArray.length >= 2 && selectedDataTextboxArray[1].length <= 2)
                    return parseInt(selectedDataTextboxArray[1]);
                break;
            case 'yyyy-MM-dd':
                if (selectedDataTextboxArray.length >= 3 && selectedDataTextboxArray[2].length <= 2) {
                    return parseInt(selectedDataTextboxArray[2]);
                }
                break;
            default:
                break;
        }
        return 0;
    };
    /**
     * @param {?} selectedDataTextboxArray
     * @return {?}
     */
    FrDateService.prototype.getMonth = function (selectedDataTextboxArray) {
        switch (this.dateValidate.dateFormat) {
            case 'dd-MM-yyyy':
            case 'yyyy-MM-dd':
                if (selectedDataTextboxArray.length >= 2 && selectedDataTextboxArray[1].length <= 2)
                    return parseInt(selectedDataTextboxArray[1]);
                break;
            case 'MM-dd-yyyy':
                if (selectedDataTextboxArray.length >= 1 && selectedDataTextboxArray[0].length <= 2)
                    return parseInt(selectedDataTextboxArray[0]);
                break;
            default:
                break;
        }
        return 0; //retuen 0 => false, id data doesn't exist
    };
    /**
     * @param {?} selectedDataTextboxArray
     * @return {?}
     */
    FrDateService.prototype.getYear = function (selectedDataTextboxArray) {
        switch (this.dateValidate.dateFormat) {
            case 'dd-MM-yyyy':
            case 'MM-dd-yyyy':
                if (selectedDataTextboxArray.length >= 3 && (selectedDataTextboxArray[2].length <= 4 || selectedDataTextboxArray[2].length <= 2)) {
                    if (parseInt(selectedDataTextboxArray[2]) == 0) {
                        if (this.focusOnTextBox == 'date')
                            alert('Not a Valid Date!!!');
                        return 2000;
                    }
                    else
                        return parseInt(selectedDataTextboxArray[2]);
                }
                break;
            case 'yyyy-MM-dd':
                if (selectedDataTextboxArray.length >= 1 && (selectedDataTextboxArray[0].length <= 4 || selectedDataTextboxArray[0].length <= 2))
                    if (parseInt(selectedDataTextboxArray[2]) == 0) {
                        if (this.focusOnTextBox == 'date')
                            alert('Not a Valid Date!!!');
                        return 2000;
                    }
                    else
                        return parseInt(selectedDataTextboxArray[0]);
                break;
            default:
                break;
        }
        return 0;
    };
    /**
     * @param {?} dateString
     * @return {?}
     */
    FrDateService.prototype.replaceDateSeperator = function (dateString) {
        dateString = dateString.replace(/[./-]/g, this.dateValidate.dateSeparator.toString()); //replace date seperator
        return dateString;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    FrDateService.prototype.getDialogType = function (type) {
        this.dateDialogType = type;
    };
    return FrDateService;
}());
FrDateService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
FrDateService.ctorParameters = function () { return []; };

var FrDateComponent = (function () {
    /**
     * @param {?} datePipe
     * @param {?} frDateService
     */
    function FrDateComponent(datePipe, frDateService) {
        this.datePipe = datePipe;
        this.frDateService = frDateService;
        this.zIndexDialog = 1000;
        this.cellTemplate = 'custom'; //accept two values cell/custom, cell for apply predefine color and custom for user define color
        // dateDialogType: string = 'date';
        this.selectedDateCalender = new Date(); //selected date for calender
        this.dateValidate = {
            dateFormat: '',
            dateSeparator: '-',
            minYear4Y: 1900,
            maxYear4Y: 2078,
            minYear2Y: 1,
            maxYear2Y: 78
        };
        this.frDateService.dateValidate.dateFormat = ('yy' + this.frDateService.dateValidate.dateSeparator + 'MM' + this.frDateService.dateValidate.dateSeparator + 'dd').replace('yy', 'yyyy');
        this.frDateService.dateValidate.dateFormat = ('MM' + this.frDateService.dateValidate.dateSeparator + 'dd' + this.frDateService.dateValidate.dateSeparator + 'yy').replace('yy', 'yyyy');
        this.frDateService.dateValidate.dateFormat = ('dd' + this.frDateService.dateValidate.dateSeparator + 'MM' + this.frDateService.dateValidate.dateSeparator + 'yy').replace('yy', 'yyyy');
        // this.dateDialogType = 'dateRange';//Date to Date Range
        this.isVisible = true;
        this.onValueChangedDate();
    }
    /**
     * @return {?}
     */
    FrDateComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    FrDateComponent.prototype.onValueChangedDate = function () {
        switch (this.dxCalenderType) {
            case 'date':
                this.selectedDateTextbox = this.datePipe.transform(this.selectedDateCalender, this.frDateService.dateValidate.dateFormat);
                break;
            case 'dateFrom':
                this.selectedDateTextboxFrom = this.datePipe.transform(this.selectedDateCalender, this.frDateService.dateValidate.dateFormat);
                break;
            case 'dateTo':
                this.selectedDateTextboxTo = this.datePipe.transform(this.selectedDateCalender, this.frDateService.dateValidate.dateFormat);
                break;
            default:
                break;
        }
        this.isDxCalenderVisible = false;
        this.zIndexDialog = 1000;
    };
    /**
     * @return {?}
     */
    FrDateComponent.prototype.ngAfterViewInit = function () {
        switch (this.frDateService.dateDialogType) {
            case 'date':
                document.getElementById('date').focus();
                break;
            case 'dateRange':
                document.getElementById('selectedDateTextboxFrom').focus();
                break;
            default:
                break;
        }
        // document.getElementById('date').focus();
    };
    /**
     * @return {?}
     */
    FrDateComponent.prototype.closeDateDialog = function () {
        this.isVisible = false;
    };
    /**
     * @return {?}
     */
    FrDateComponent.prototype.dialogOk = function () {
        this.isVisible = false;
    };
    /**
     * @param {?} dxCalenderType
     * @return {?}
     */
    FrDateComponent.prototype.openDxCalender = function (dxCalenderType) {
        this.dxCalenderType = dxCalenderType;
        this.isDxCalenderVisible = true;
        this.zIndexDialog = 999;
        switch (dxCalenderType) {
            case 'date':
                if (this.selectedDateTextbox != undefined)
                    this.resetSelectedDateCalender(this.selectedDateTextbox);
                break;
            case 'dateFrom':
                if (this.selectedDateTextboxFrom != undefined)
                    this.resetSelectedDateCalender(this.selectedDateTextboxFrom);
                break;
            case 'dateTo':
                if (this.selectedDateTextboxTo != undefined)
                    this.resetSelectedDateCalender(this.selectedDateTextboxTo);
                break;
            default:
                break;
        }
    };
    /**
     * @param {?} selectedTextbox
     * @return {?}
     */
    FrDateComponent.prototype.resetSelectedDateCalender = function (selectedTextbox) {
        var /** @type {?} */ selectedTextboxArray = selectedTextbox.split(this.frDateService.dateValidate.dateSeparator);
        switch (this.frDateService.dateValidate.dateFormat) {
            case 'dd-MM-yyyy':
                this.selectedDateCalender = new Date(parseInt(selectedTextboxArray[2]), parseInt(selectedTextboxArray[1]) - 1, parseInt(selectedTextboxArray[0]));
                break;
            case 'MM-dd-yyyy':
                this.selectedDateCalender = new Date(parseInt(selectedTextboxArray[2]), parseInt(selectedTextboxArray[0]) - 1, parseInt(selectedTextboxArray[1]));
                break;
            case 'yyyy-MM-dd':
                this.selectedDateCalender = new Date(parseInt(selectedTextboxArray[0]), parseInt(selectedTextboxArray[1]) - 1, parseInt(selectedTextboxArray[2]));
                break;
            default:
                break;
        }
    };
    /**
     * @return {?}
     */
    FrDateComponent.prototype.closeDxCalender = function () {
        this.isDxCalenderVisible = false;
        this.zIndexDialog = 1000;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FrDateComponent.prototype.windowKeyUp = function (event) {
        console.log(event.keyCode);
        if (event.keyCode == 27) {
            if (this.zIndexDialog == 1000)
                this.closeDateDialog();
            else
                this.closeDxCalender();
        }
        else if (event.keyCode == 13) {
            switch (this.frDateService.focusOnTextBox) {
                case 'date':
                    if (parseInt(this.selectedDateTextbox) != 0) {
                        var /** @type {?} */ selectedDateTextboxAfterFormating = this.frDateService.dateFormating(this.selectedDateTextbox);
                        if (selectedDateTextboxAfterFormating) {
                            this.selectedDateCalender = selectedDateTextboxAfterFormating;
                            this.selectedDateTextbox = this.datePipe.transform(selectedDateTextboxAfterFormating, this.frDateService.dateValidate.dateFormat);
                        }
                    }
                    break;
                case 'dateFrom':
                    if (parseInt(this.selectedDateTextboxFrom) != 0) {
                        var /** @type {?} */ selectedDateTextboxFromAfterFormating = this.frDateService.dateFormating(this.selectedDateTextboxFrom);
                        if (selectedDateTextboxFromAfterFormating) {
                            this.selectedDateCalender = selectedDateTextboxFromAfterFormating;
                            this.selectedDateTextboxFrom = this.datePipe.transform(selectedDateTextboxFromAfterFormating, this.frDateService.dateValidate.dateFormat);
                        }
                    }
                    break;
                case 'dateTo':
                    if (parseInt(this.selectedDateTextboxTo) != 0) {
                        var /** @type {?} */ selectedDateTextboxToAfterFormating = this.frDateService.dateFormating(this.selectedDateTextboxTo);
                        if (selectedDateTextboxToAfterFormating) {
                            this.selectedDateCalender = selectedDateTextboxToAfterFormating;
                            this.selectedDateTextboxTo = this.datePipe.transform(selectedDateTextboxToAfterFormating, this.frDateService.dateValidate.dateFormat);
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    FrDateComponent.prototype.getCellCssClass = function (date) {
        var /** @type {?} */ dayNumber = date.getDay(), /** @type {?} */ daycolor = "";
        if (dayNumber === 0 || dayNumber === 6) {
            daycolor = "#FF3030";
        }
        else {
            daycolor = "black";
        }
        return daycolor;
    };
    return FrDateComponent;
}());
FrDateComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-fr-date',
                template: "<head> <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn3.devexpress.com/jslib/17.1.6/css/dx.common.css\" /> <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn3.devexpress.com/jslib/17.1.6/css/dx.light.css\" /> </head> <body> <div [style.z-index]=\"zIndexDialog\" *ngIf=\"isVisible\" class=\"dialog\"> <div *ngIf=\"frDateService.dateDialogType == 'date'\" class=\"date-container\"> <div class=\"dialog-heading\">Enter Date</div> <div> <div style=\"margin-top: 10px;\"> <span class=\"date-label\">Date :</span> <input id=\"date\" type=\"text\" (focus)=\"frDateService.focusOnTextBox='date'\" [(ngModel)]=\"selectedDateTextbox\" required> <button class=\"open-dxcalender\" (click)=\"openDxCalender('date')\">---</button> </div> </div> </div> <div *ngIf=\"frDateService.dateDialogType == 'dateRange'\" class=\"date-container\"> <div class=\"dialog-heading\">Date Range</div> <div style=\"margin-top: 6px;\"> <span class=\"from-label\">From :</span> <input  id=\"selectedDateTextboxFrom\" type=\"text\" (focus)=\"frDateService.focusOnTextBox='dateFrom'\" [(ngModel)]=\"selectedDateTextboxFrom\" required> <button class=\"open-dxcalender\" (click)=\"openDxCalender('dateFrom')\">---</button> </div> <div style=\"margin-top: 2px;\"> <span class=\"to-label\">To :</span> <input id=\"selectedDateTextboxTo\" type=\"text\" (focus)=\"frDateService.focusOnTextBox='dateTo'\" [(ngModel)]=\"selectedDateTextboxTo\" required> <button class=\"open-dxcalender\" (click)=\"openDxCalender('dateTo')\">---</button> </div> </div> <div class=\"btn-group\"> <button class=\"btn\" (click)=\"dialogOk()\">Ok</button> <button class=\"btn\" (click)=\"closeDateDialog()\">Exit</button> </div> </div> <div class=\"calender-container-date\" *ngIf=\"isDxCalenderVisible\"> <dx-calendar id=\"calender-container-date\" [firstDayOfWeek]=\"this.dateValidate.weekStartDate\" [(value)]=\"selectedDateCalender\" [cellTemplate]=\"cellTemplate\" showTodayButton=\"true\" visible=\"true\" (onValueChanged)=\"onValueChangedDate()\"> <span *dxTemplate=\"let cell of 'custom'\" [style.color]=\"getCellCssClass(cell.date)\"> {{cell.text}} </span> </dx-calendar> <div class=\"close-dx-calender\" (click)=\"closeDxCalender()\"> <span>Cancel</span> </div> </div> <div *ngIf=\"isVisible\" class=\"overlay\"></div> </body>",
                styles: [".dialog { /* z-index: 1000; */ position: fixed; left: 42%; top: 40%; height: 140px; width: 219px; background-color: #d3d3d3; /* padding: 12px; */ border: 1px solid #bfbfbf; } .overlay { position: fixed; top: 0; bottom: 0; left: 0; right: 0; /* background-color: rgba(0, 0, 0, 0.5); */ z-index: 999; } .btn{ cursor: pointer; height: 38px; width: 106px; background-color: #bfbfbf; font-size: larger; } .btn-group{ /* position: absolute; */ /* bottom: 2px; */ left: 1px; } .calender-container-date { float: left; position: absolute; z-index: 1000;  left: calc(42% + 225px); top: 40%; } .dialog-heading{ font-weight: bold; text-decoration: underline; text-align: center; padding-top: 15px; } .date-label{ float: left; padding: 0px 8px 0px 25px; } .from-label{ float: left; padding: 0px 12px 0px 15px; } .to-label{ float: left; padding: 0 30px 0px 15px; } .close-dx-calender{ text-align: center; background-color: dimgrey; cursor: pointer; } .open-dxcalender{ background-color: transparent; border: 0px; font-size: small; } input { background-color: transparent; border: 0px solid; height:20px; width: 90px; font-weight: bold; }  input:focus { background-color: black; color:white; font-weight: bold; } .date-container{ height:100px; }"],
                host: { '(window:keyup)': 'windowKeyUp($event)' }
            },] },
];
/**
 * @nocollapse
 */
FrDateComponent.ctorParameters = function () { return [
    { type: common.DatePipe, },
    { type: FrDateService, },
]; };

var FrDatemodule = (function () {
    function FrDatemodule() {
    }
    /**
     * @return {?}
     */
    FrDatemodule.forRoot = function () {
        return {
            ngModule: FrDatemodule,
            providers: [FrDateService]
        };
    };
    return FrDatemodule;
}());
FrDatemodule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    devextremeAngular.DxCalendarModule,
                    devextremeAngular.DxTemplateModule
                ],
                declarations: [
                    FrDateLibraryComponent,
                    FrDateComponent,
                ],
                exports: [
                    FrDateLibraryComponent,
                    FrDateComponent,
                ],
                providers: [common.DatePipe]
            },] },
];
/**
 * @nocollapse
 */
FrDatemodule.ctorParameters = function () { return []; };

exports.FrDatemodule = FrDatemodule;
exports.FrDateLibraryComponent = FrDateLibraryComponent;
exports.FrDateService = FrDateService;
exports.FrDateComponent = FrDateComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
