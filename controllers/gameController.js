
//===============================================================
//This controller handles the responses for the game api request:
//===============================================================
const router = require('../router');
const gameModel = require('../models/gameModel');
const statsModel = require('../models/statsModel');

const game = require('../libs/utils/game').createGame;
const player = require('../libs/utils/player').createPlayer;

exports.processReq=(req,res)=>{
  //Some important variables at your disposal:
  let page=req.path;
  let params=req.query;
  let routeObj=router.getCurRouteObj("API");
  let userGesture=params.gesture;

  const statsMod = new statsModel();

  //Create async process to combine all game results and outcomes:
  const processOutcome = async () => {

    let Player1= new player(0, "Player 1", "User", userGesture);
    let Player2= new player(1, "Player 2", "Computer");

    let Game=new game(Player1, Player2);
    Game.play();
    Game.score();
    let outcome=[];
    let gameResults=Game.outcome();
    outcome[0]=gameResults;

      //Save Game Results:
      let savedP1Stat = await statsMod.savePlayerStat({
        player: 'Player',
        outcome: gameResults.player1Award,
        gesture:gameResults.p1Gesture
      });

      let savedP2Stat = await statsMod.savePlayerStat({
        player: 'Computer',
        outcome: gameResults.player2Award,
        gesture:gameResults.p2Gesture
      });

      //Get Game Stats:
      stats={};
      let win = await statsMod.readPlayerWin();
      stats.win=win[0].win;
      let lose = await statsMod.readPlayerLose();
      stats.lose=lose[0].lose;
      let draw = await statsMod.readPlayerDraw();
      stats.draw=draw[0].draw;
      let player1Gestures=await statsMod.readPlayerGestures({
        player:'Player'
      });
      stats.user_gestures=player1Gestures;

      let player2Gestures=await statsMod.readPlayerGestures({
        player:'Computer'
      });
      stats.computer_gestures=player2Gestures;

      outcome.push(stats);
      console.log(outcome);
      res.send(JSON.stringify(outcome));
  }

  processOutcome();

}
