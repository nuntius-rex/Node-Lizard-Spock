
const router = require('../router');
const gameModel = require('../models/gameModel');
const gameInfo=gameModel.gameInfo;
const guestures=gameModel.gameGestures;

exports.processReq=(req,res)=>{
  //Some important variables at your disposal:
  let page=req.path;
  let params=req.query;
  let routeObj=router.getCurRouteObj("Home");
  let template=routeObj.template;
  //console.log(routeObj);

  //OPTIONS FOR RETURN:
  //1) Normal Express Send()
  //res.send(`This is the ${page} page. You sent the following parameters: ${JSON. stringify(params)}`);

  //2) Express Send File: You may want to include path
  //var path = require('path');
  //res.sendFile(path.join(__dirname + '../../views/'+template));

  //=== Data Model call here = Get Model for Home:
  //3)
  //console.log(appModel.getAppContent("Home"));
  var homeBodyContent="undefined";


  //console.log(gameInfo);
  console.log(guestures);

  //4) es6Renderer
  res.render(template, {locals:
    {
      title: gameInfo.name,
      code:gameInfo.code,
      gameExplanation:gameInfo.explanation,
      challengeMsg:gameInfo.challengeMsg,
      exampleInfo:gameInfo.exampleInfo,
      guestures:guestures
    }
  });
}
