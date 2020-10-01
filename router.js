
//Controllers:
const homeController = require('./controllers/homeController');
const gameController = require('./controllers/gameController');

//Routes in this context are router instruction to the Express router:
const routes=[
  {
    name:"Home",
    path:"/",
    params:"",
    type:"get",
    template_name:"index",
    template:"index.html",
    controller: function(){
      return homeController.processReq;
    }
  },
  {
    name:"API",
    path:"/api",
    params:"",
    type:"post",
    template_name:"",
    template:"",
    controller: function(){
      return gameController.processReq;
    }
  }
];

exports.routes=routes;
//Process for controller to get the current route object settings by name:
//Note: case sensitive!
exports.getCurRouteObj=function(name){
  let result=routes.filter(function(item){
    if(item.name==name){
      return item;
    }
  })
  //Return the first element of the array:
  return result[0];
}
