
module.exports.gameInfo={
    name:"Rock Paper Scissors Lizard Spock",
    code: "NodeJS Version",
    challengeMsg:"Click a Gesture to Challenge the Machine!",
    explanation:`This is a NodeJS version of the game, Rock-Paper-Scissors-Lizard-Spock.
    The game was originally created by Sam Kass with Karen Bryla and made popular by the Sheldon character on the television show Big Bang Theory.`,
    exampleInfo:`Languages used: HTML, CSS, JavaScript/jQuery, Bootsrap, AJAX, NodeJS,<br> Node Libraries: Express, express-es6-template-engine, promise-mysql
    Dev: MVC Create (also by me), nodemon <br>A Code Demo by Dan Guinn - <a href="https://github.com/nuntius-rex/node-lizard-spock" target="_blank">Code On GitHub</a>`
};

/*
Note the order of the gestures and their id.
They must be ordered clockwise in the game star pattern.
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

module.exports.getGameGesture=function(name){
  let result=gameGestures.filter(function(item, index){
    if(item.name==name){
      return item;
    }
  })
  //Return the first element of the array:
  return result[0];
}

module.exports.getRandomGesture=function(name){
  let ranNum=Math.floor(Math.random()*gameGestures.length);
  let gesture=gameGestures[ranNum];
  return gesture;
}
