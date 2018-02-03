function randomColor() {
  function randomHex() {
    return Math.floor(Math.random() * 16).toString(16);
  }
  let r1 = randomHex();
  let r2 = randomHex();
  let g1 = randomHex();
  let g2 = randomHex();
  let b1 = randomHex();
  let b2 = randomHex();
  return "#" + r1 + r2 + g1 + g2 + b1 + b2;
}

function setColor(element) {
  element.style.backgroundColor = randomColor();
}

function nextLetter(letter) {
  let n = letter.codePointAt(0);
  n++;
  return String.fromCharCode(n);
}

function previousLetter(letter) {
  let n = letter.codePointAt(0);
  n--;
  return String.fromCharCode(n);
}

function nextNumber(numString) {
  let int = parseInt(numString, 10);
  int++;
  return int.toString();
}

function lastNumber(numString) {
  let int = parseInt(numString, 10);
  int--;
  return int.toString();
}

function checkNumber(numString) {
  let num = parseInt(numString, 10);
  if (num > 0 && num < 13) {
    return true;
  } else {
    return false;
  }
}

function checkLetter(letter) {
  let char = letter.codePointAt(0);
  if (char > 97 && char < 107) {
    return true;
  } else {
    return false;
  }
}

function cascadeChange(elementArray) {
  let newArray = [];
  elementArray.forEach(function(element) {
    //get classes of element
    let startClass = element.className;
    let relevantClass = startClass.split(" ")[2];
    let row = relevantClass.split("-")[0];
    let col = relevantClass.split("-")[1];
    //generate 4 new elements
    var nextRow = nextLetter(row);
    var lastRow = previousLetter(row);
    var nextCol = nextNumber(col);
    var lastCol = lastNumber(col);
    if (checkLetter(nextRow) && checkNumber(nextCol)) {
      let optionOne = "." + nextRow + "-" + nextCol;
      let relevantDiv = document.querySelector(optionOne);
      setColor(relevantDiv);
      let optionOneDiv = document.querySelector(optionOne);
      newArray.push(optionOneDiv);
    }
    if (checkLetter(nextRow) && checkNumber(lastCol)) {
      let optionTwo = "." + nextRow + "-" + nextCol;
      let relevantDiv = document.querySelector(optionTwo);
      setColor(relevantDiv);
      let optionTwoDiv = document.querySelector(optionTwo);
      newArray.push(optionTwoDiv);
    }
    if (checkLetter(lastRow) && checkNumber(nextCol)) {
      let optionThree = "." + nextRow + "-" + nextCol;
      let relevantDiv = document.querySelector(optionThree);
      setColor(relevantDiv);
      let optionThreeDiv = document.querySelector(optionThree);
      newArray.push(optionThreeDiv);
    }
    if (checkLetter(lastRow) && checkNumber(lastCol)) {
      let optionFour = "." + nextRow + "-" + nextCol;
      let relevantDiv = document.querySelector(optionFour);
      setColor(relevantDiv);
      let optionFourDiv = document.querySelector(optionFour);
      newArray.push(optionFourDiv);
    }
    //if not already there push to new array - need?
  });
  if (newArray.length > 0) {
    console.log(newArray);
    cascadeChange(newArray);
  }
}

document.addEventListener("click", function(event) {
  let div = event.target;
  let divClasses = div.className.split(" ");
  let divLocation = divClasses[2];
  setColor(div);
  cascadeChange([div]);
});
