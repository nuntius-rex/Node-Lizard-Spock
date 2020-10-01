
let players=[];
module.exports.player=players;

module.exports.createPlayer=function(id, name, type, gestureName, gestureAction, gestureFA, award){
  player={
    id:id,
    name:name,
    type:type,
    gesture_id:"",
    gestureName:gestureName,
    gestureAction:gestureAction,
    gestureFA:gestureFA,
    award:award
  };
  return player;
  players.push(this.player);

}
