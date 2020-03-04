function theBeatlesPlay(musicians, instruments){
var arrayOfString = [];//Create a variable with an empty array
for (let i = 0; i < musicians.length; i++) {
  //loop这里var i=0也行
 //returns an array of strings containing what instruments each musician plays
arrayOfString.push(musicians[i] + " plays " + instruments[i])
}
return arrayOfString;
}
//////////////////////////////
function johnLennonFacts(facts){
  var arrayFact=[];
  var i=0;
  while(facts[i]){//这个i就是counter
  arrayFact.push(facts[i++] + "!!!")//arrayFact.push(facts[i] + "!!!")
                                    //i++;也可以这样
}
  return arrayFact;
}
/////////////////////
function iLoveTheBeatles(number){
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    number++;
  }
  while ( number < 15);
  return emptyArray;
}
