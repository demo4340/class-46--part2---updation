class Player {
  constructor(){

    this.index = null;
    this.name = null;
    this.choosenKit = 0;
    this.luck = round(random(0, 60));
    this.state = 0;

  }

  getCount(){

      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
      
          playerCount = data.val();
    
      })

  }

  updateCount(count){

      database.ref('/').update({

          playerCount: count
      
      });

  }

  update(){

    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({

      name : this.name,
      kit : this.choosenKit,
      luck : this.luck,
      state : this.state

    });

  }

  static getPlayerInfo(){

    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{

      allPlayers = data.val();

    })
    
  }

  
  
}
