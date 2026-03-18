let memValue;
let currValue;

let currAction = 0;
let secondOperand = false;
//0-none/result
//1=division
//2=multiplication
//3=substraction
//4=addition

function updateCurrValue() {
    let str = document.getElementById("result").value;

    if (str.at(0) === '.') document.getElementById("result").value = '0' + document.getElementById("result").value;
    currValue = parseFloat(document.getElementById("result").value);
}
function updateMemValue() {
    let str = document.getElementById("result").value;

    if (str.at(0) === '.') document.getElementById("result").value = '0' + document.getElementById("result").value;
    memValue = parseFloat(document.getElementById("result").value);
}




function dis(val) {

    if (val === '0' && document.getElementById("result").value === '0');
    else

        if (val === '.' && document.getElementById("result").value.includes('.'));
        else {

            if (secondOperand === true) {
                secondOperand = false;
                document.getElementById("result").value = '';
            }

            document.getElementById("result").value += val;
        }


}

function clr() {
    document.getElementById("result").value = '';
    memValue = null;
    currValue = null;
}

function division(a, b) {

    if (b === 0) {
        throw new Error("Division by 0!");
    }
    else return a / b;
}

function multiply(a, b) {
    return a * b;
}

function substract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function pressActionButton(button) {

    switch (button.value) {
        case '/':
            currAction = 1;
            break;
        case '*':
            currAction = 2;
            break;
        case '-':
            currAction = 3;
            break;
        case '+':
            currAction = 4;
            break;
        default: console.log('Unknown action selected: ' + button.value);
    }

    updateMemValue();
    secondOperand = true;
}


function solve() {
    let result;

    updateCurrValue();

    switch (currAction) {
        case 1:

            if (currValue != 0) result = division(memValue, currValue);
            else {

                document.getElementById("result").value = "Division by 0 not allowed!";

                setTimeout(() => {
                    document.getElementById("result").value = memValue;

                }, 2000);

            }
            break;
        case 2:
            result = multiply(memValue, currValue);
            break;
        case 3:
            result = substract(memValue, currValue);
            break;
        case 4:
            result = add(memValue, currValue);
            break;
        default: {
            result = document.getElementById("result").value;
        }
    }

    document.getElementById("result").value = result;
    updateMemValue();
    secondOperand = false;
    currAction = 0;
}

function pressNegate() {
    let currentString = document.getElementById("result").value;

    if (currentString.at(0) != '-') document.getElementById("result").value = '-' + currentString;
    else document.getElementById("result").value = currentString.substring(1);
}