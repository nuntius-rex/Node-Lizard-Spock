
const router = require('../router');
const appModel = require('../models/appModel');

exports.processReq=(req,res)=>{
  //Some important variables at your disposal:
  let page=req.path;
  let params=req.query;
  let routeObj=router.getCurRouteObj("About");
  let template=routeObj.template;

  console.log(routeObj);

  //OPTIONS FOR RETURN:
  //1) Normal Express Send()
  //res.send(`This is the ${page} page. You sent the following parameters: ${JSON. stringify(params)}`);

  //2) Express Send File: You may want to include path
  //var path = require('path');
  //res.sendFile(path.join(__dirname + '../../views/'+template));

  //=== Data Model call here = Get Model for Home:
  //3) Model calls will vary, depending on the model data needs and source. this is just for example purposes:
  var aboutBodyContent=appModel.getBodyContent("About");

  //3) es6Renderer
  res.render(template, {locals: {title: 'About Page!', body_content:aboutBodyContent}});
}
