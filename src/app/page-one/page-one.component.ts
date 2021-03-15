import { Component, Input, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Data } from '../models/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  @Input() xPos:number;
  @Input() yPos:number;

  public divList:any[] = [{title:"One", color:"#00ffff"},
                          {title:"Two", color: "#7fffd4"}, 
                          {title:"Three", color: "#ffe4c4"}, 
                          {title:"Four", color: "#d2691e"}];


  constructor(private dataService: DataService) {
    console.log("page one construct");

    // Only set the origin if this is the very first load of the data service.
    if (dataService.isInit()){
      dataService.setOrigin();
      dataService.setInitComplete();
    }

   }

  ngOnInit(): void {
    console.log("page one init");
    console.log(this.dataService.getData());
  }

  onDivDrop(event: CdkDragDrop<any>){
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  
  // Need to save the x,y position.  However, the element has a translation going so
  // the x and y on the element have to remain at original positions.
  saveMe(event:any){
    // This is a bit off because it's the x,y of the mouse pointer.
    let xPos:number = event.pageX;
    let yPos:number = event.pageY;
    this.dataService.setData(xPos, yPos);

    // myStyle will be the real location of the div.  However, it is a top, left 
    // and translate3d part.  Which would have to be parsed apart then summed
    // back together.  It doesn't really suit this example to add all that code.
    let myStyle:string = event.target.attributes.style.nodeValue;
    console.log(myStyle);
  }

  getTop():string {
    return this.dataService.getData().originalY + 'px';
    //return "142px";
  }

  getLeft():string {
    return this.dataService.getData().originalX + 'px';
    //return "550px";
  }
}
