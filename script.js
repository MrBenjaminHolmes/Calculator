const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");
const deleteBtns = document.querySelectorAll(".top>button")

numBtns.forEach((number)=>{
    number.addEventListener(("click"),()=>{
        display.innerHTML += number.textContent;
    })
})

deleteBtns[0].addEventListener("click",()=>{
    display.innerHTML = "";
})

deleteBtns[1].addEventListener("click",()=>{
    display.innerHTML =display.textContent.slice(0, -1);
})