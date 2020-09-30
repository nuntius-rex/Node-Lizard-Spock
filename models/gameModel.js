
module.exports.gameInfo={
    name:"Rock Paper Scissors Lizard Spock",
    code: "NodeJS Version",
    challengeMsg:"Click A Gesture to Challenge the Machine!",
    explanation:"This is a NodeJS version of the game, Rock-Paper-Scissors-Lizard-Spock. The game was originally created by Sam Kass with Karen Bryla and made popular by the Sheldon character on the television show Big Bang Theory.",
    exampleInfo:`Languages used: HTML, CSS, JavaScript/jQuery, Bootsrap, AJAX, NodeJS,<br> Node Libraries: MVC Create (also by me), Express, nodemon) <br>A Code Demo by Dan Guinn - <a href="https://github.com/nuntius-rex/node-lizard-spock" target="_blank">Code On GitHub</a>`
};

/*
Note the order of the gestures and their id.
They must be ordered in the star pattern.
*/
let gameGestures=[
  {
    id:1,
    name:"scissors",
    font_awesome:"fa fa-hand-scissors-o fa-5x",
    action1:"cuts",
    action2:"decapitates"
  },
  {
    id:2,
    name:"paper",
    font_awesome:"fa fa-hand-paper-o fa-5x",
    action1:"covers",
    action2:"disproves"
  },
  {
    id:3,
    name: "rock",
    font_awesome:"fa fa-hand-rock-o fa-5x",
    action1:"crushes",
    action2:"crushes"
  },
  {
    id:4,
    name:"lizard",
    font_awesome:"fa fa-hand-lizard-o fa-5x",
    action1:"poisons",
    action2:"eats"
  },
  {
    id:5,
    name:"spock",
    font_awesome:"fa fa-hand-spock-o fa-5x",
    action1:"smashes",
    action2:"vaporizes"
  }
];

module.exports.gameGestures=gameGestures;

const getGameGesture=function(name){
  let result=gameGestures.filter(function(item, index){
    if(item.name==name){
      return item;
    }
  })
  //Return the first element of the array:
  return result[0];
}

const getRandomGesture=function(name){
  let ranNum=Math.floor(Math.random()*gameGestures.length);
  let gesture=gameGestures[ranNum];
  return gesture;
}



module.exports.createGame=function(player1, player2){

  this.game={
    player1:player1,
    player2:player2,
    play: function(){

      let p1Gesture=getGameGesture(player1.gestureName);
      //console.log("===========START==========");
      //console.log(p1Gesture);
      let p2Gesture=getRandomGesture();
      //console.log("========================");
      console.log(p2Gesture);
      //console.log("===========END===========");

      //console.log(p1Gesture);
      this.player1.gesture_id=p1Gesture.id;
      this.player1.gestureName=p1Gesture.name;
      let p1ActionsOffset=this.getActionOffset(p1Gesture.id, p2Gesture.id);
      if(p1ActionsOffset==1){
        this.player1.gestureAction=p1Gesture.action1;
      }else if(p1ActionsOffset==2){
        this.player1.gestureAction=p1Gesture.action2;
      }
      this.player1.gestureFA=p1Gesture.font_awesome;

      //console.log(p2Gesture);
      this.player2.gesture_id=p2Gesture.id;
      this.player2.gestureName=p2Gesture.name;
      let p2ActionOffset=this.getActionOffset(p1Gesture.id, p2Gesture.id); //p2Gesture.action1;
      if(p2ActionOffset==1){
        this.player2.gestureAction=p2Gesture.action1;
      }else if(p2ActionOffset==2){
        this.player2.gestureAction=p2Gesture.action2;
      }
      this.player2.gestureFA=p2Gesture.font_awesome;

    },
    score: function(){

      /*
      ================================================================================
      Scoring Explained: Scoring mathematically by the Star Matrix.

      Note: The following is the math algorythm utilized, where p1 and p2
      represent the user's gesture number in an array of 5.
      let position=(5+(p1-p2))%5;

      1. Working from the inside in PEMDAS order, the code above first
      subtracts the User's hand gesture from the Computer's hand gesture.
      2. Then the number 5 is added to the difference (this assures the modulus
      calculation in the next step will aways be at least 5 (returning zero).
      3. Next, modulus is used against the result to find the remainder of 5
      divided by the result. The remainder is the position in the star.
      4. The winner can be determined based off of the position of the second hand
      gesture in relation to the first hand gesture. Since the game is a star matrix,
      The User will always lose on odd and win on even and visa versa for the Computer.
      ================================================================================
      */
      let p1=this.player1.gesture_id;
      let p2=this.player2.gesture_id;

      let position=(5+(p1-p2))%5;
      //console.log(position);
      switch (position){
            case 0:
                this.player1.award="Draw";
                this.player2.award="Draw";
                break;
            case 1:
                //Player 2 (Computer) wins
                this.player1.award="Lose";
                this.player2.award="Win";
                break;
            case 2:
                //Player 1 (Human) Wins
                this.player1.award="Win";
                this.player2.award="Lose";
                break;
            case 3:
                //Player 2 (Computer) wins
                this.player1.award="Lose";
                this.player2.award="Win";
                break;
            case 4:
                //Player 1 (Human) Wins
                this.player1.award="Win";
                this.player2.award="Lose";
                break;
        }
    },
    getActionOffset: function(p1g, p2g){
        let p1step= -(p1g-p2g);
        let p2step= -(p2g-p1g);
        let action="";

        if(
              p1step==1 ||
              p1step==4 ||
              p2step==1 ||
              p2step==4

          ){
              action=1;
          }else if(
              p1step==2 ||
              p1step==3 ||
              p2step==2 ||
              p2step==3
          ){
              action=2;
          }

          return action;

    },
    outcome: function(){

      let outcome={
        p1Gesture:this.player1.gestureName,
        p1GestureFA:this.player1.gestureFA,
        p2Gesture:this.player2.gestureName,
        p2GestureFA:this.player2.gestureFA,
      }

      if(this.player1.award=="Win"){
        outcome.winnerGesture=this.player1.gestureName,
        outcome.action=this.player1.gestureAction,
        outcome.loserGesture=this.player2.gestureName,
        outcome.outcomeText="Player 1 Wins!"
        return outcome;

      }else if(this.player2.award=="Win"){

          outcome.winnerGesture=this.player2.gestureName,
          outcome.action=this.player2.gestureAction,
          outcome.loserGesture=this.player1.gestureName,
          outcome.outcomeText="Player 2 Wins!"
          return outcome;

      }else{

        let outcome={
            p1Gesture:this.player1.gestureName,
            p1GestureFA:this.player1.gestureFA,
            winnerGesture:"",
            action:"",
            loserGesture:"",
            p2Gesture:this.player2.gestureName,
            p2GestureFA:this.player2.gestureFA,
            outcomeText:"Draw!"
        }
        return outcome;

      }



    }

  };
  return this.game;
}
