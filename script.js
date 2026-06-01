const addition = document.querySelector("#plus");
const substraction = document.querySelector("#minus");
const multiplication = document.querySelector("#multiplicate");
const division = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const reset = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const dot = document.querySelector("#dot");

const bigScreen = document.querySelector(".screen-text-big")
const smallScreen = document.querySelector(".screen-text-small")

let firstNumberArray = [];
let secondNumberArray = [];
let firstNumberCopy = "";
let secondNumberCopy = "";
let operatorCopy = "";
let firstNumber = "";
let secondNumber = "";
let operator = ""; //change this to whatever operator the user wants to use
let operatorCheck = false; //change this to true when operator is in use and false if not

function add(a, b){
    return parseFloat(a) + parseFloat(b);
};

function substract(a, b){
    return a - b;
};

function multiplicate(a, b){
    return a * b;
};

function divide(a, b){
    if (secondNumber === "0"){
        smallScreen.textContent = "";
        bigScreen.textContent = "ERROR";
        firstNumberArray.length = 0;
        secondNumberArray.length = 0;
        firstNumberCopy = "";
        secondNumberCopy = "";
        operatorCopy = "";
        firstNumber = "";
        secondNumber = "";
        operator = "";
        operatorCheck = false;
        return;
    }
    return a / b;
};

function updateSmallDisplay(){
    smallScreen.textContent = firstNumberCopy + " " + operatorCopy + " " + secondNumberCopy;
};

function updateBigDisplay(){
    bigScreen.textContent = firstNumber + " " + operator + " " + secondNumber;
};

function evaluate(a, b){
    firstNumberCopy = firstNumber;
    secondNumberCopy = secondNumber;
    operatorCopy = operator;
    if (operator === "+"){
        firstNumber = add(a, b);
        if (firstNumber % 1 !== 0){
            firstNumber = firstNumber.toFixed(1);
        }
    } else if (operator === "-"){
        firstNumber = substract(a, b);
        if (firstNumber % 1 !== 0){
            firstNumber = firstNumber.toFixed(1);
        }
    } else if (operator === "x"){
        firstNumber = multiplicate(a, b);
        if (firstNumber % 1 !== 0){
            firstNumber = firstNumber.toFixed(1);
        }
    } else if (operator === "/"){
        firstNumber = divide(a, b);
        if (firstNumber % 1 !== 0){
            firstNumber = firstNumber.toFixed(1);
        }
    }
    firstNumberArray.length = 0;
    secondNumberArray.length = 0;
    secondNumber = "";
    operator = "";
    operatorCheck = false;
    updateBigDisplay();
    updateSmallDisplay();
};

function addZero(){
    if (operatorCheck === false && firstNumberArray[0] === "0" && firstNumberArray[1] !== "."){
        return;
    } else if (operatorCheck === true && secondNumberArray[0] === "0" && secondNumberArray[1] !== "."){
        return;
    } else if (operatorCheck === false){
        firstNumberArray.push("0");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("0");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addOne(){
    if (operatorCheck === false){
        firstNumberArray.push("1");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("1");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addTwo(){
    if (operatorCheck === false){
        firstNumberArray.push("2");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("2");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addThree(){
    if (operatorCheck === false){
        firstNumberArray.push("3");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("3");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addFour(){
    if (operatorCheck === false){
        firstNumberArray.push("4");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("4");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addFive(){
    if (operatorCheck === false){
        firstNumberArray.push("5");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("5");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addSix(){
    if (operatorCheck === false){
        firstNumberArray.push("6");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("6");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addSeven(){
    if (operatorCheck === false){
        firstNumberArray.push("7");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("7");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addEight(){
    if (operatorCheck === false){
        firstNumberArray.push("8");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("8");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addNine(){
    if (operatorCheck === false){
        firstNumberArray.push("9");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push("9");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function addDot(){
    if (firstNumberArray.includes(".") && operatorCheck === false){
        return;
    } else if (secondNumberArray.includes(".")){
        return;
    } else if (operatorCheck === false && firstNumber === ""){
        firstNumberArray.push("0");
        firstNumberArray.push(".");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();     
    } else if (operatorCheck === true && secondNumber === ""){
        secondNumberArray.push("0");
        secondNumberArray.push(".");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === false){
        firstNumberArray.push(".");
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true){
        secondNumberArray.push(".");
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    }
};

function operatorAdd(){
    if(firstNumber === ""){
        return;
    }
    if (operatorCheck === true && secondNumberArray.length !== 0){
        evaluate(firstNumber, secondNumber);
    }
    operator = "+";
    operatorCheck = true;
    updateBigDisplay();
};

function operatorSubstract(){
    if (operatorCheck === true && secondNumberArray.length !== 0){
        evaluate(firstNumber, secondNumber);
    }
    operator = "-";
    operatorCheck = true;
    updateBigDisplay();
};

function operatorMultiplicate(){
    if(firstNumber === ""){
        return;
    }
    if (operatorCheck === true && secondNumberArray.length !== 0){
        evaluate(firstNumber, secondNumber);
    }
    operator = "x";
    operatorCheck = true;
    updateBigDisplay();
};

function operatorDivide(){
    if(firstNumber === ""){
        return;
    }
    if (operatorCheck === true && secondNumberArray.length !== 0){
        evaluate(firstNumber, secondNumber);
    }
    operator = "/";
    operatorCheck = true;
    updateBigDisplay();
};

function operatorEqual(){
    if (secondNumber === ""){
        return;
    }
    evaluate(firstNumber, secondNumber);
};

function deleteOne(){
    if (operatorCheck === false && firstNumberArray.length > 0){
        firstNumberArray.pop();
        firstNumber = firstNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true && secondNumberArray.length > 0){
        secondNumberArray.pop();
        secondNumber = secondNumberArray.join("");
        updateBigDisplay();
    } else if (operatorCheck === true && secondNumber === ""){
        operator = "";
        operatorCheck = false;
        updateBigDisplay();
    }
};

zero.addEventListener("click", () => addZero());
one.addEventListener("click", () => addOne());
two.addEventListener("click", () => addTwo());
three.addEventListener("click", () => addThree());
four.addEventListener("click", () => addFour());
five.addEventListener("click", () => addFive());
six.addEventListener("click", () => addSix());
seven.addEventListener("click", () => addSeven());
eight.addEventListener("click", () => addEight());
nine.addEventListener("click", () => addNine());
dot.addEventListener("click", () => addDot());
addition.addEventListener("click", () => operatorAdd());
equal.addEventListener("click", () => operatorEqual());
substraction.addEventListener("click", () => operatorSubstract());
multiplication.addEventListener("click", () => operatorMultiplicate());
division.addEventListener("click", () => operatorDivide());
reset.addEventListener("click", () => deleteOne());


document.onkeydown = function(e){
    const key = e;
    console.log(e);
    switch (key.key){
        case "1": addOne(); break;
        case "2": addTwo(); break;
        case "3": addThree(); break;
        case "4": addFour(); break;
        case "5": addFive(); break;
        case "6": addSix(); break;
        case "7": addSeven(); break;
        case "8": addEight(); break;
        case "9": addNine(); break;
        case ".": addDot(); break;
        case "+": operatorAdd(); break;
        case "-": operatorSubstract(); break;
        case "*": operatorMultiplicate(); break;
        case "/": operatorDivide(); break;
        case "Enter": operatorEqual(); break;
        case "Backspace": deleteOne(); break;
    }
};

clear.addEventListener("click", function(){
    firstNumberArray.length = 0;
    secondNumberArray.length = 0;
    firstNumberCopy = "";
    secondNumberCopy = "";
    operatorCopy = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    operatorCheck = false;
    updateBigDisplay();
    updateSmallDisplay();
})


