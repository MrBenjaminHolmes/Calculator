const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");
let refresh = false;
let value1 = "";
let operator = "";
let value2 = "";
const pi = Math.PI;
let Ans = 0;
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");
const AnsBtn = document.querySelector("#ans");
const squared = document.querySelector("#square");
const deleteBtns = document.querySelectorAll(".top>button");

function removeSelected() {
    operators.forEach((operatorBtn) => {
        operatorBtn.classList.remove("selected");
    });
}

function evaluate(num1, num2, operator) {
    if (num1 === "" || num1 === null) {
        return num2;
    }
    if (num2 === "" || num2 === null) {
        return num1;
    }
    if (operator === "+") {
        return parseFloat(num1) + parseFloat(num2);
    }
    if (operator === "-") {
        return parseFloat(num1) - parseFloat(num2);
    }
    if (operator === "×") {
        return parseFloat(num1) * parseFloat(num2);
    }
    if (operator === "÷") {
        return parseFloat(num1) / parseFloat(num2);
    }
}

numBtns.forEach((number) => {
    number.addEventListener("click", () => {
        if (display.innerHTML.includes(".")) {
            if (refresh === true) {
                display.innerHTML = "";
                refresh = false;
            }
            if (number.textContent != ".") {
                display.innerHTML += number.textContent;
            }
        } else {
            if (refresh === true) {
                display.innerHTML = "";
                refresh = false;
            }
            display.innerHTML += number.textContent;
        }
    });
});

deleteBtns[0].addEventListener("click", () => {
    display.innerHTML = "";
    value1 = "";
    value2 = "";
    operator = "";
    refresh = false;
});

deleteBtns[1].addEventListener("click", () => {
    display.innerHTML = display.textContent.slice(0, -1);
});

operators.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        value1 = display.textContent;
        if (value1 === "π") {
            value1 = pi;
        }
        operator = operatorBtn.textContent;
        refresh = true;
        removeSelected();
        operatorBtn.classList.add("selected");
    });
});

equals.addEventListener("click", () => {
    if (operator === "") {
        Ans = display.textContent;
    } else {
        value2 = display.textContent;
        if (value2 === "π") {
            value2 = pi;
        }
        if (value1 === "Ans") {
            value1 = Ans.toString();
        }
        if (value2 === "Ans") {
            value2 = Ans.toString();
        }
        if (value2 === "0" && operator === "÷") {
            display.innerHTML = "Nice Try";
            refresh = true;
            removeSelected();
            value1 = "";
            operator = "";
            value2 = "";
            return; 
        }
        Ans = evaluate(value1, value2, operator);
    }
    display.innerHTML = Ans;
    console.log(Ans);
    removeSelected();
    value1 = "";
    operator = "";
    value2 = "";
    refresh = true;
});


squared.addEventListener("click", () => {
    const currentValue = parseFloat(display.textContent);
    if (!isNaN(currentValue)) {
        display.innerHTML = currentValue * currentValue;
        Ans = display.textContent;
        value1 = display.textContent;
        operator = "";
    }
    removeSelected();
});

AnsBtn.addEventListener("click", () => {
    display.innerHTML = Ans;
    refresh = true;
});

root.addEventListener("click", () => {
    const currentValue = parseFloat(display.textContent);
    if (!isNaN(currentValue)) {
        display.innerHTML = Math.sqrt(currentValue);
        Ans = display.textContent;
        value1 = display.textContent;
        operator = "";
    }
    removeSelected();
});
