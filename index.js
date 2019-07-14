var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
  return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

var lineWithNames = []
function currentLine(katzDeliLine) {
  let i = 0;
    while (i < katzDeliLine.length) {
    lineWithNames.push(` `+[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
  return (`The line is currently:` + lineWithNames);
  }
}

//empty array => empty line
//counter starts with zero 
//as soon as new customers comes in, increment the counter and add that to an array
//at the end array = [1,2,3,4,....]

function giveANumber(katzDeliLine) {
  var newArray = [];
  var i = 0
  for (i = 0; i < katzDeliLine.length; i++) {
    newArray.push[i + 1]
  }
}








  
