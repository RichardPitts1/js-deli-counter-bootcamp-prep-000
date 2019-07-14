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

function giveANumber(katzDeliLine) {
  var newArray = [];
  for (i = 0; i < katzDeliLine.length; i++) {
    newArray.push[i + 1]
  }
}








  
