const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");
let refresh = false;
let value1= "";
let operator = ""
let value2 ="";
let Ans=0;
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");
const deleteBtns = document.querySelectorAll(".top>button");

function removeSelected(){
    operators.forEach((operatorBtn)=>{
        operatorBtn.classList.remove("selected");
    })
}

function evaluate(num1,num2,operator){
    if (operator === "+")
    {
        return parseInt(num1)+parseInt(num2);
    }
    if (operator === "-")
    {
        return parseInt(num1)-parseInt(num2);
    }
    if (operator === "×")
    {
        return parseInt(num1)*parseInt(num2);
    }
    if (operator === "÷")
    {
        return parseInt(num1)/parseInt(num2);
    }
    

}

numBtns.forEach((number)=>{
    number.addEventListener(("click"),()=>{
        if (refresh === true){
            display.innerHTML = "";
            display.innerHTML += number.textContent;
            refresh = false;

        }
        else
        {
            display.innerHTML += number.textContent;
        }
        
    })
})

deleteBtns[0].addEventListener("click",()=>{
    display.innerHTML = "";
})

deleteBtns[1].addEventListener("click",()=>{
    display.innerHTML =display.textContent.slice(0, -1);
})

operators.forEach((operatorBtn)=>{
    operatorBtn.addEventListener("click",()=>{
        value1 = display.textContent
        operator = operatorBtn.textContent
        refresh = true;
        removeSelected()
        operatorBtn.classList.add("selected")
        
    })

})

equals.addEventListener("click",()=>{
    value2 = display.textContent;
    if (value1 === "Ans") {
        value1 = Ans.toString();
    }
    if (value2 === "Ans") {
        value2 = Ans.toString();
    }
    Ans = evaluate(value1,value2,operator);
    display.innerHTML = Ans;
    console.log(Ans);
    removeSelected();
    value1= "";
    operator = ""
    value2 ="";
    refresh = true;
})