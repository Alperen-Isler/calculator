let operator;

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

