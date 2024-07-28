const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");
let operatorSelected = false;
let value1= "";
let operator = ""
let value2 ="";
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");
const deleteBtns = document.querySelectorAll(".top>button");

function removeSelected(){
    operators.forEach((operatorBtn)=>{
        operatorBtn.classList.remove("selected");
    })
}

numBtns.forEach((number)=>{
    number.addEventListener(("click"),()=>{
        if (operatorSelected === true){
            display.innerHTML = "";
            display.innerHTML += number.textContent;
            operatorSelected = false;

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
        console.log(operatorBtn)
        value1 = display.textContent
        operator = operatorBtn.textContent
        operatorSelected = true;
        removeSelected()
        operatorBtn.classList.add("selected")
        
    })

})

