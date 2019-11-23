class Rintangan{
    constructor(){
        this.mr=8;
        this.landh=78;
        this.r=50;
        this.x=width;
        this.y=height-this.landh;
    }

    move(){
        this.x-=this.mr;
    }

    show(){
        image(halanganImage,this.x,this.y,this.r,this.r)
    }

    stop(){
        // this.x=this.x;
        this.mr=0;
    }
}