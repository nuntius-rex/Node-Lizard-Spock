const appName="Rock Paper Scissors Lizard Spock (NodeJS Version)"
const port=3000;
const express=require("express");
const es6Renderer = require('express-es6-template-engine');
const app=express();
const router = require('./router');
const routes=router.routes;

//Serve public files"
app.use(express.static(__dirname + '/public'));

//Setup templating:
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');


//Dynamically setup get() routes to all controllers:
for(let i=0;i<routes.length;i++){
  let controller=routes[i].controller; //This returns a controller function
  if(routes[i].type=="get"){
    app.get(routes[i].path,controller()); //This executes the controller function for the given path
  }else if(routes[i].type=="post"){
    app.post(routes[i].path,controller()); //This executes the controller function for the given path
  }
}

//Global Start:
app.listen(port, ()=> {
  console.log(
`The ${appName} has started at http://localhost:${port}`);
});
