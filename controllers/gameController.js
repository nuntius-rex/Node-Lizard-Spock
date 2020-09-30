

//===============================================
//This controller handles the responses for the
//game api request
//===============================================
const router = require('../router');
const gameModel = require('../models/gameModel');
const game = require('../models/gameModel').createGame;
const player = require('../models/playerModel').createPlayer;


exports.processReq=(req,res)=>{
  //Some important variables at your disposal:
  let page=req.path;
  let params=req.query;
  let routeObj=router.getCurRouteObj("API");
  //console.log(params);
  let userGesture=params.gesture;
  //console.log(userGesture);

  let Player1= new player(0, "Player 1", "User", userGesture);
  let Player2= new player(1, "Player 2", "Computer");

  let Game=new game(Player1, Player2);
  Game.play();
  Game.score();
  let outcome=[];
  outcome[0]=Game.outcome();
  outcome[1]={};
  //console.log(Player1);
  //console.log(Player2);

  res.send(JSON.stringify(outcome));


}
