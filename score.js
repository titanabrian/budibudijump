class Score {

    constructor(){
        this.score=0;
        this.x=width-10;
        this.y=30;
        this.r=255;
        this.g=255;
        this.b=255;
        this.size=50;
    }

    show() {
        textFont(fontGameOver);
        textSize(this.size);
        textAlign(RIGHT);
        fill(this.r,this.g,this.b);
        text("Saldo Binomo : "+String(this.score)+" Dollar",this.x,this.y);
    }

    update(value) {
        this.score+=value;
    }
}
