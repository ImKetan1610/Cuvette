let inputArray = [];
let result = 0
let flag = true
let app = document.getElementById("app");
let operator = new Set(["+","-","*","/"])

let inputDiv = document.createElement("div");
inputDiv.setAttribute(
  "style", 
  "background-color: black;color:white; width: 500px; height: 100px"
);

// let input = document.createElement("input");
// input.setAttribute(
//   "style",
//   "background-color: transparent; width: 100%; height: 100%"
// );
// inputDiv.append(input);


let buttonsDiv = document.createElement("div");
buttonsDiv.id = "grid-container";
buttonsDiv.addEventListener("click", (e) => {
  let val = e.target.innerText;
  if (val == "RESET") {
    inputArray.length = 0;
  } else if (val == "DEL") {
    flag = !flag
    inputArray.pop();
  } else if (val == "=") {
    let res = eval(inputArray.join(""))
     inputArray = [res]
  } else if (val.length < 2) {
    if(operator.has(val) && flag){
      inputArray.push(val);
      flag = false
    }else if (!operator.has(val) && flag==false){
      inputArray.push(val);
      // flag = true
    }
    
    
  }
  // inputArray.push(e.target.innerText);
  inputDiv.innerText =inputArray.join("")
  console.log(inputArray);
});

buttonsDiv.setAttribute(
  "style",
  "background-color: rgb(37, 45, 68); width: 500px; height: 500px"
);

let seven = document.createElement("div");
seven.innerText = "7";
let eight = document.createElement("div");
eight.innerText = "8";
let nine = document.createElement("div");
nine.innerText = "9";
let del = document.createElement("div");
del.id = "del";
del.innerText = "DEL";

let four = document.createElement("div");
four.innerText = "4";
let five = document.createElement("div");
five.innerText = "5";
let six = document.createElement("div");
six.innerText = "6";
let plus = document.createElement("div");
plus.innerText = "+";

let one = document.createElement("div");
one.innerText = "1";
let two = document.createElement("div");
two.innerText = "2";
let three = document.createElement("div");
three.innerText = "3";
let min = document.createElement("div");
min.innerText = "-";

let dot = document.createElement("div");
dot.innerText = ".";
let zero = document.createElement("div");
zero.innerText = "0";
let divide = document.createElement("div");
divide.innerText = "/";
let mult = document.createElement("div");
mult.innerText = "*";

let reset = document.createElement("div");
reset.id = "reset";
reset.innerText = "RESET";
let equal = document.createElement("div");
equal.id = "equal";
equal.innerText = "=";

buttonsDiv.append(
  seven,
  eight,
  nine,
  del,
  four,
  five,
  six,
  plus,
  one,
  two,
  three,
  min,
  dot,
  zero,
  divide,
  mult,
  reset,
  equal
);

app.append(inputDiv, buttonsDiv);
