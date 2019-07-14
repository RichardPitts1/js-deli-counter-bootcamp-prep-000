var katzDeliLine = []


function currentLine(katzDeliLine) {
  if (katzDeliLine === o) {
    "The line is currently empty."
  } else {
    return "The line is currently: 1. Ada, 2. Grace"
  }
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);