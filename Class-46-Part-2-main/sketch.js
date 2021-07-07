var backGround
var gameState = 0;
var playerCount;
var button, button2, button3, button4;
var dHeight = 0;
var dWidth = 0;
var nextArrow, startImage, starting;
var page = 0;
var allPlayers;
var database;
var kit1img, kit2img, kit3img;
var kit1, kit2, kit3;
var form, player, game;
var playerSprite, playerFrontImg, playerRightImg, playerLeftImg;
var reset;
var kitShowImg;
var choosenKitNumber;


function preload(){

    backGround = loadImage("Images/Background.png");
    nextArrow = loadImage("Images/nextArrow.png");
    startImage = loadImage("Images/start.png");
    woodenBoardImage = loadImage("Images/boardwithText.png");
    kit1img = loadImage("Images/Kit1.png");
    kit2img = loadImage("Images/Kit2.png");
    kit3img = loadImage("Images/Kit3.png");
    playerFrontImg = loadAnimation("Images/PlayerFront.png");
    playerRightImg = loadAnimation("Images/PlayerRight.png");

    kitShowImg = loadImage("Images/BowStandard.png");
    kitShowImg2 = loadImage("Images/Sword.png");
    kitShowImg3 = loadImage("Images/Trident.png");


}

function setup(){

    database = firebase.database();
    dHeight = displayHeight - 110;
    dWidth = displayWidth - 20;

    createCanvas(dWidth, dHeight);

    button = createSprite(dWidth - 50, dHeight - 50, 50, 50);
    button.addImage("button", nextArrow);
    button.scale = 0.1;

    button2 = createSprite(dWidth -50, dHeight - 200 , 50, 50, 50);
    button2.addImage("button", nextArrow);
    button2.scale = 0.1;
    button2.visible = false;

    button3 = createSprite(dWidth + 50, dHeight + 50, 50, 50);
    button3.addImage("button", nextArrow);
    button3.scale = 0.1;

    starting = createSprite(dWidth / 2, dHeight /2);
    starting.addImage("start", startImage);
    starting.scale = 0.5;

    woodenBoard = createSprite(dWidth/ 2, dHeight/2 + 50);
    woodenBoard.addImage("goal", woodenBoardImage);
    woodenBoard.scale = 0.6;

    game = new Game();
    game.getState();

    reset = createButton('reset');
    reset.position(100, 100);

    reset.mousePressed(()=> {

        game.update(0);
        player.updateCount(0);

        database.ref('/').update({
  
          players : null
  
        })

    })
    
}

function draw(){

    background(backGround);

    starting.visible = false;
    woodenBoard.visible = false;

    if(gameState === 0){

        if(page === 0){
    
            //Game Title
    
            textSize(50);
            fill("white");
            strokeWeight(8);
            stroke("black")
            text("Dungeon Escape", dWidth/2 - 200, 100);   
    
            //Visibility of Start
    
            starting.visible = true;
    
            if(mousePressedOver(button)){
                page = 1;
                button.destroy();
                button2.visible = true;
            }
    
        }

    }
    

    if(page === 1){   

        textSize(50);
        fill("white");
        strokeWeight(8);
        stroke("black");
        text("Dungeon Escape", dWidth/2 - 200, 100);  

        woodenBoard.visible = true;

        if(mousePressedOver(button2)){

            page = 2;
            game.start();
            textSize(50);
            fill("white");
            strokeWeight(8);
            stroke("black")
            text("Dungeon Escape", dWidth/2 - 200, 100);   

        }  

    }

    if(page === 2){

        //Player Images

        playerSprite = createSprite(displayWidth/2 + 375, displayHeight/2);
        playerSprite.scale = 1.7;
        playerSprite.addAnimation("player", playerFrontImg);

        if(playerCount >= 3){

            gameState = 1;
            game.update(1);
            page = 3;

        }

        
    }

    if(page === 3){

        playerSprite.visible = false;
        game.play();

    }
    
    
    drawSprites();

}

