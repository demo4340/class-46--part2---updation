class Form{

    constructor() {
          
        this.nameInput = createInput('Your Name');
        this.charInput = createInput('Your Character');

        this.kit1 = createButton("Choose Kit");
        this.kit2 = createButton("Choose Kit");
        this.kit3 = createButton("Choose Kit");

        this.text1 = createElement('h2');
        this.goalText = createElement('h2');

        this.kits = createElement('h2');

        this.playButton = createButton('Play');

        this.greeting = createElement('h1');

        this.goalInfo = createElement('h3');

        this.waitMessage = createElement('h2');

        this.chance = createElement('h2');

        this.selectPlayer = createButton('I want to be a Player');
        this.selectHunter = createButton('I want to be a Hunter');

    }

    hide(){

        this.kit1.hide();
        this.kit2.hide();
        this.kit3.hide();
        this.playButton.hide();
        this.greeting.hide();
        this.kits.hide();
        this.text1.hide();
        this.goalText.hide();
        this.nameInput.hide();
        this.goalInfo.hide();
        this.waitMessage.hide();

    }

    display(){
        
        strokeWeight(1);
        stroke("white");
       
        this.text1.html("Please enter your name : ");
        this.text1.style('color', "white");
        this.text1.position(150, 100);
        
        this.nameInput.position(420, 125);
        this.nameInput.style('background-color', "pink");
        
        this.goalText.html("Goal : ");
        this.goalText.style('color', "white");
        this.goalText.position(150, dHeight/2 - 95);

        this.goalInfo.html("Please select a kit to display your goal first");
        this.goalInfo.style('color', "white");
        this.goalInfo.position(250, dHeight/2 - 100);

        this.playButton.position(displayWidth/2, displayHeight-200);

        
        this.kits.html("Kits : ");
        this.kits.style('color', "white");
        this.kits.position(150, 450);

        this.kit1.position(260, 530);
        this.kit1.style('background-color', "lightgreen");

        this.kit2.position(365, 530);
        this.kit2.style('background-color', "lightgreen");

        this.kit3.position(465, 530);
        this.kit3.style('background-color', "lightgreen");

        var kitShow = createSprite(displayWidth/2 + 370, displayHeight/2 - 100);
        kitShow.addImage("kitImg", kitShowImg);
        kitShow.scale = 0.3;
        kitShow.visible = true;

        this.kit1.mousePressed(()=>{

            player.choosenKit = "Kit1";
            this.goalInfo.html("As archer stay behind the lines and deal damage to bosses and players");
            this.goalInfo.position(230, dHeight/2 - 95);

            kitShow.visible = true;
            kitShow.addImage("kitImg", kitShowImg);

        })

        this.kit2.mousePressed(()=>{

            player.choosenKit = "Kit2";
            this.goalInfo.html("Fast and quick, as a swordsman engage the enemy but with caution");
            this.goalInfo.position(230, dHeight/2 - 95);

            kitShow.visible = true;
            kitShow.addImage("kitImg", kitShowImg2);
            
        })

        this.kit3.mousePressed(()=>{

            player.choosenKit = "Kit3";
            this.goalInfo.html("Charge in or stay back, the trident is a versatile weapon but can slow you down");
            this.goalInfo.position(230, dHeight/2 - 95);

            kitShow.visible = true;
            kitShow.addImage("kitImg", kitShowImg3);
            
        })


        var firstKit = createSprite(displayWidth/5, displayHeight - 380, 50, 50);
        firstKit.addImage("kit", kit1img);
        firstKit.scale = 0.2;
        
        var secKit = createSprite(displayWidth/5 + 100, displayHeight - 380, 50, 50);
        secKit.addImage("kit", kit2img);
        secKit.scale = 0.2;
        
        var thirdKit = createSprite(displayWidth/5 + 200, displayHeight - 380, 50, 50);
        thirdKit.addImage("kit", kit3img);
        thirdKit.scale = 0.2;

        this.playButton.mousePressed(()=>{

            this.nameInput.hide();
            this.playButton.hide();
            this.kit1.hide();
            this.kit2.hide();
            this.kit3.hide();
            this.goalText.hide();
            this.text1.hide();
            this.kits.hide();
            firstKit.remove();
            secKit.remove();
            thirdKit.remove();
            this.goalInfo.hide();
            
            
            player.name = this.nameInput.value();
            playerCount+=1;
            player.index = playerCount;
            player.update(player.name);
            player.updateCount(playerCount);

            
            this.kit1.mousePressed(()=>{

                player.updateKit(1);

            })

            this.kit2.mousePressed(()=>{

                player.updateKit(2);

            })

            this.kit3.mousePressed(()=>{

                player.updateKit(3);

            })
            
            this.greeting.html("Welcome " + player.name + " to Dungeon Escape !");
            this.greeting.style("color", "white");
            this.greeting.position(displayWidth/2 - 250, 30);

            this.waitMessage.html("Please wait as you are player number " + (playerCount) + " . Few more players have to join !");
            this.waitMessage.style("color", "white");
            this.waitMessage.position(displayWidth/2 - 350, 120); 
            
            this.chance.html("Your chance of becoming player is " + player.luck + "%");
            this.chance.style("color", "white");
            this.chance.position(displayWidth / 2 - 300, 200);

            this.selectPlayer.position(displayWidth /2 - 300, 400);
            this.selectHunter.position(displayWidth /2- 100, 400);

            this.selectHunter.mousePressed(()=>{

                player.luck = player.luck - 10;
                this.chance.html("Your chance of becoming player is " + player.luck + "%");
                this.selectHunter.hide();
                this.selectPlayer.hide();

                player.update();

            })

            this.selectPlayer.mousePressed(()=>{

                player.luck = player.luck + 10;
                this.chance.html("Your chance of becoming player is " + player.luck + "%");
                this.selectPlayer.hide();
                this.selectHunter.hide();

                player.update();

            })

        })

        
    }


}


