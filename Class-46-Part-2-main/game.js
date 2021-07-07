class Game {
    constructor(){
        


    }
    
    getState(){

      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         
        gameState = data.val();

      })
     
    }
  
    update(state){

      database.ref('/').update({
        
        gameState : state

      });

    }
  
    start(){

      if(page === 2){

        button2.destroy();
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
        
      }

    }

    play(){
      
      game.getState();

      if(gameState === 1){

        Player.getPlayerInfo();

        //var index = 0;
        var highLuck;
        var plrluck = 0;
        var plrArray = [];
        var a, b;

        if(allPlayers !== undefined){

          for(var plr in allPlayers){

            //index = index + 1;
            plrArray.push(allPlayers[plr].luck);
               

          }

          console.log(plrArray);

          for(var i = 0; i < plrArray.length; i++){
            a = plrArray[i];
            b = plrArray[i + 1];

            if(a > b){
              console.log(a);
            }
            else{
              console.log(b);
            }
          }

        }

      }

    }
    
  }
  
