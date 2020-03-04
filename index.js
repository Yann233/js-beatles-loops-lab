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
function iLoveTheBeatles(number){//此function有一个parameter是Number
  var emptyArray = [];//创一个新的空array
  do {
    emptyArray.push("I love the Beatles!")//string push 到空array里
    number++;//加一次，number=number+1;
  }
  while ( number < 15);//当次数<15,也就是加到第14次
  return emptyArray;//把加过string的array给return出来
}
