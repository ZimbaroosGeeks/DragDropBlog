export class Data {
    public xPos:number;
    public yPos:number;
    public originalX: number;
    public originalY: number;
    public initMe:boolean;
    
    constructor(){
        this.xPos = 440;
        this.yPos = 550;
        this.initMe = true;
    }

    setOrigin(){
        this.originalX = this.xPos;
        this.originalY = this.yPos;
    }
}