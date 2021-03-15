
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private dataSet: Data = new Data();

    constructor() {
    }

    public getData(): Data {
        return (this.dataSet);
    }

    public setData(xPos:number, yPos:number):void {
        this.dataSet.xPos = xPos;
        this.dataSet.yPos = yPos;
    }

    public setOrigin(): void {
        console.log("set origin");
        this.dataSet.setOrigin();
    }

    public isInit(): boolean {
        return this.dataSet.initMe;
    }

    public setInitComplete(): void {
        this.dataSet.initMe = false;
    }

    // Handle Errors 
    error(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
