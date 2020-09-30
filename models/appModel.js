
//Models are typically data crud operations to a database solution.
//Here we will simulate that with a simple object

console.log("model loaded");

const appConfig=[
  {
    "name":"Home",
    "body_content":`
      <p>Bacon ipsum dolor amet short ribs spare ribs porchetta chislic capicola ham hock venison ribeye shoulder. Strip steak sausage beef ribs, chuck bresaola prosciutto andouille burgdoggen pork loin chicken hamburger leberkas picanha. Drumstick pork porchetta short loin brisket. Rump pork loin pastrami bresaola salami pig, brisket andouille filet mignon swine.</p>
    `
  },
  {
    "name":"About",
    "body_content":`
      <p>Sirloin shank ground round pork belly kevin. Chislic leberkas hamburger, beef ham chicken frankfurter andouille t-bone jerky. Meatloaf brisket biltong, ground round landjaeger prosciutto picanha pastrami burgdoggen shoulder pork turkey. Ball tip landjaeger short loin turkey pastrami tenderloin shankle tongue. Beef cupim buffalo, meatball pork belly filet mignon turducken jerky drumstick spare ribs ribeye frankfurter.</p>
    `
  }
]

var getBodyContent=function(name){
  let result=appConfig.filter(function(item){
    if(item.name==name){
      return item;
    }
  });
  return result[0].body_content;
}

module.exports.getBodyContent=getBodyContent;
