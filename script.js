const addition = document.querySelector("#plus");
const substraction = document.querySelector("#minus");
const multiplication = document.querySelector("#multiplicate");
const division = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const reset = document.querySelector("#delete");

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
const paranthesisOpen = document.querySelector("#paranthesis-open");
const paranthesisClose = document.querySelector("#paranthesis-close");
const percentage = document.querySelector("#percentage");

let operator;
let operatorCheck;

function add(a, b){
    return a + b;
};

function substract(a, b){
    return a - b;
};

function multiplicate(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function evaluate(a, b){
    if (operator === "+"){
        return add(a, b);
    } else if (operator === "-"){
        return substract(a, b);
    } else if (operator === "x"){
        return multiplicate(a, b);
    } else if (operator === "÷"){
        return divide(a, b);
    }
};

zero.addEventListener("click", function(){
    console.log("zero");
});

one.addEventListener("click", function(){
    console.log("one");
});

two.addEventListener("click", function(){
    console.log("two");
});

three.addEventListener("click", function(){
    console.log("three");
});

four.addEventListener("click", function(){
    console.log("four");
});

five.addEventListener("click", function(){
    console.log("five");
});

six.addEventListener("click", function(){
    console.log("six");
});

seven.addEventListener("click", function(){
    console.log("seven");
});

eight.addEventListener("click", function(){
    console.log("eight");
});

nine.addEventListener("click", function(){
    console.log("nine");
});

equal.addEventListener("click", function(){
    console.log("equal");
});

addition.addEventListener("click", function(){
    console.log("add");
});

substraction.addEventListener("click", function(){
    console.log("substract");
});

multiplication.addEventListener("click", function(){
    console.log("multiplicate");
});

division.addEventListener("click", function(){
    console.log("divide");
});

reset.addEventListener("click", function(){
    console.log("delete/reset");
});

percentage.addEventListener("click", function(){
    console.log("percentage");
});

paranthesisClose.addEventListener("click", function(){
    console.log(")");
});

paranthesisOpen.addEventListener("click", function(){
    console.log("(");
});

dot.addEventListener("click", function(){
    console.log(".");
});


