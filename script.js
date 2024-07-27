const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");

numBtns.forEach((number)=>{
    number.addEventListener(("click"),()=>{
        display.innerHTML += number.textContent;
    })
})