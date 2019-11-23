let budi;
let rintangan=[];
let bg;
let budiImage;
let halanganImage;
let score;
let updateScore;
let timer=0;
let timerFrame=0;
let arrBudiImage=[];
let fontGameOver;
let gameOverSfx;
let summerSfx;
let jumpSfx;
let tempSound=[];
let start=false;

function setup() {
    createCanvas(700, 400);
    summerSfx.stop();
    resetCanvas();
}

function preload(){ 
    bg=loadImage("assets/background.png");
    for(i=0;i<13;i++){
        arrBudiImage.push(loadImage("assets/budi/"+String(i+1)+".png"));
    }
    fontGameOver=loadFont('assets/game_over.ttf');
    halanganImage=loadImage("assets/kaleng.png");
    gameOverSfx=loadSound("assets/game_over.mp3");
    jumpSfx=loadSound("assets/jump.mp3");
    summerSfx=loadSound("assets/summer.mp3");
} 

function resetCanvas(){
    budi=new Budi();
    score = new Score();
    updateScore=100;
    tempSound[0]=gameOverSfx;
    summerSfx.setVolume(0.5);
    summerSfx.setLoop(true);
    summerSfx.play();
    rintangan=[];
}

function keyPressed(){
  if(key == ' ' && !budi.over){
    budi.jump();
  }else if(key==' '&& budi.over){
      resetCanvas();
  }
}

function touchStarted(){
    // console.log(mouseButton);
    if(!budi.over){
      budi.jump();
    }else if(budi.over){
        resetCanvas();
    }
  }

function draw() {
    background(bg);
    
    score.show();

    if (millis() >= 400+timer) {
        setTimeout(score.update(updateScore),3000);
        timer = millis();
    }

    if (millis() >= 0+timerFrame) {
        budi.nextFrame();
        timerFrame = millis();
    }
    
    
    budi.show();
    budi.move();

    if(random(1)<0.009){
        rintangan.push(new Rintangan());    
    }
    
    for(let r of rintangan){
        r.show();
        r.move();
        if(budi.hits(r)){
            console.log("Game Over");
            summerSfx.stop();
            try{
                tempSound[0].setVolume(0.7);
                tempSound[0].play();
            }catch(ex){

            }
            tempSound[0]=null;
            textFont(fontGameOver);
            textSize(100);
            textAlign(CENTER);
            fill(this.r,this.g,this.b);
            text("Game Over",(width/2),150);
            r.stop();
            updateScore=0;
            budi.fs=0;
        }else{
        }
    }

}
