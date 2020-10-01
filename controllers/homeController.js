
const router = require('../router');

//Get Game Model:
const gameModel = require('../models/gameModel');
const gameInfo=gameModel.gameInfo;
const guestures=gameModel.gameGestures;

const statsModel = require('../models/statsModel');
const statsMod = new statsModel();

exports.processReq=(req,res)=>{
  let page=req.path;
  let params=req.query;

  let routeObj=router.getCurRouteObj("Home");
  let template=routeObj.template;

  const asyncResults = async () => {
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

    //console.log(stats);

    res.render(template, {locals:
      {
        title: gameInfo.name,
        code:gameInfo.code,
        gameExplanation:gameInfo.explanation,
        challengeMsg:gameInfo.challengeMsg,
        exampleInfo:gameInfo.exampleInfo,
        guestures:guestures,
        gameStats:stats

      }
    });

  };
  asyncResults();



}
