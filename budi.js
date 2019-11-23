class Budi {

    constructor (){
      this.r=70;
      this.x=50;
      this.landh=100;
      this.y=height-this.landh;
      this.vy=0;
      this.gravity=2;
      this.over=false;
      this.indexBudi=0;
      this.fs=1;
      jumpSfx.setVolume(0.1)
    }
    
    jump(){
        jumpSfx.play();
        if(this.y==height-this.landh){
            this.vy=-34;
        }
    }
    
    move(){
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y , 0 , height - this.landh)
    }

    hits(rintangan){
        if(collideRectRect(this.x,this.y,this.r,this.r,rintangan.x,rintangan.y,rintangan.r,rintangan.r)){
            this.over=true;
            return true;
        }
        return this.over;
    }
    
    nextFrame(){
      if(this.indexBudi==12){
        this.fs=-1;
      }else if(this.indexBudi==0){
        this.fs=1;
      }

      this.indexBudi+=this.fs;
    }

    show(){    
      image(arrBudiImage[this.indexBudi],this.x,this.y,this.r,this.r);
    }
  }