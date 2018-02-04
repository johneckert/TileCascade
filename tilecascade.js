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

function setColor(element, chosenColor) {
  element.style.backgroundColor = chosenColor;
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
  if (char > 96 && char < 108) {
    return true;
  } else {
    return false;
  }
}

function cascadeChange(elementArray, chosenColor) {
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

    //12:00
    if (checkLetter(lastRow) && checkNumber(col)) {
      let optionOne = "." + lastRow + "-" + col;
      let relevantDiv = document.querySelector(optionOne);
      if (relevantDiv.classList.contains("ready")) {
        setTimeout(setColor, 50, relevantDiv, chosenColor);
        relevantDiv.classList.remove("ready");
        relevantDiv.classList.add("transformed");
        let optionOneDiv = document.querySelector(optionOne);
        newArray.push(optionOneDiv);
      }
    }
    //1:30
    if (checkLetter(lastRow) && checkNumber(nextCol)) {
      let optionTwo = "." + lastRow + "-" + nextCol;
      let relevantDiv = document.querySelector(optionTwo);
      if (relevantDiv.classList.contains("ready")) {
        setTimeout(setColor, 100, relevantDiv, chosenColor);
        relevantDiv.classList.remove("ready");
        relevantDiv.classList.add("transformed");
        let optionTwoDiv = document.querySelector(optionTwo);
        newArray.push(optionTwoDiv);
      }
    }
    //3:00
    if (checkLetter(row) && checkNumber(nextCol)) {
      let optionThree = "." + row + "-" + nextCol;
      let relevantDiv = document.querySelector(optionThree);
      if (relevantDiv.classList.contains("ready")) {
        setTimeout(setColor, 150, relevantDiv, chosenColor);
        relevantDiv.classList.remove("ready");
        relevantDiv.classList.add("transformed");
        let optionThreeDiv = document.querySelector(optionThree);
        newArray.push(optionThreeDiv);
      }
    }
    //4:30
    if (checkLetter(nextRow) && checkNumber(nextCol)) {
      let optionFour = "." + nextRow + "-" + nextCol;
      let relevantDiv = document.querySelector(optionFour);
      if (relevantDiv.classList.contains("ready")) {
        setTimeout(setColor, 200, relevantDiv, chosenColor);
        relevantDiv.classList.remove("ready");
        relevantDiv.classList.add("transformed");
        let optionFourDiv = document.querySelector(optionFour);
        newArray.push(optionFourDiv);
      }
    }
    //6:00
    if (checkLetter(nextRow) && checkNumber(col)) {
      let optionFive = "." + nextRow + "-" + col;
      let relevantDiv = document.querySelector(optionFive);
      if (relevantDiv.classList.contains("ready")) {
        setTimeout(setColor, 250, relevantDiv, chosenColor);
        relevantDiv.classList.remove("ready");
        relevantDiv.classList.add("transformed");
        let optionFiveDiv = document.querySelector(optionFive);
        newArray.push(optionFiveDiv);
      }
    }
    //7:30
    if (checkLetter(lastRow) && checkNumber(nextCol)) {
      let optionSix = "." + lastRow + "-" + nextCol;
      let relevantDiv = document.querySelector(optionSix);
      if (relevantDiv.classList.contains("ready")) {
        setTimeout(setColor, 300, relevantDiv, chosenColor);
        relevantDiv.classList.remove("ready");
        relevantDiv.classList.add("transformed");
        let optionSixDiv = document.querySelector(optionSix);
        newArray.push(optionSixDiv);
      }
    }
    //9:00
    if (checkLetter(row) && checkNumber(nextCol)) {
      let optionSeven = "." + row + "-" + nextCol;
      let relevantDiv = document.querySelector(optionSeven);
      if (relevantDiv.classList.contains("ready")) {
        setTimeout(setColor, 350, relevantDiv, chosenColor);
        relevantDiv.classList.remove("ready");
        relevantDiv.classList.add("transformed");
        let optionSevenDiv = document.querySelector(optionSeven);
        newArray.push(optionSevenDiv);
      }
    }
    //10:30
    if (checkLetter(lastRow) && checkNumber(lastCol)) {
      let optionEight = "." + lastRow + "-" + lastCol;
      let relevantDiv = document.querySelector(optionEight);
      if (relevantDiv.classList.contains("ready")) {
        setTimeout(setColor, 400, relevantDiv, chosenColor);
        relevantDiv.classList.remove("ready");
        relevantDiv.classList.add("transformed");
        let optionEightDiv = document.querySelector(optionEight);
        newArray.push(optionEightDiv);
      }
    }
  });
  if (newArray.length > 0) {
    setTimeout(cascadeChange, 450, newArray, chosenColor);
  }
}

document.addEventListener("click", function(event) {
  let div = event.target;
  let divClasses = div.className.split(" ");
  let divLocation = divClasses[2];
  const chosenColor = randomColor();
  setColor(div, chosenColor);
  cascadeChange([div], chosenColor);
});
