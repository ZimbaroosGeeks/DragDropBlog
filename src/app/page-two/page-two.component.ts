import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Data } from '../models/data.model';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  public dataValues:Data;
  @Input() xValue:number = 0;
  @Input() yValue:number = 0;

  constructor(private dataService: DataService) {
    console.log("page two construct");
    this.dataValues = dataService.getData();
    this.xValue = this.dataValues.xPos;
    this.yValue = this.dataValues.yPos;  
  }

  ngOnInit(): void {
    console.log("page two init");
    console.log(this.dataService.getData());
  }

  public saveValues():void {
    this.dataValues.originalX = this.xValue;
    this.dataValues.originalY = this.yValue;
    this.dataValues.xPos = this.xValue;
    this.dataValues.yPos = this.yValue;
  }
}
