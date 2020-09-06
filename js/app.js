
let count = 0;
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");
const value = document.getElementById("value");


btnDecrease.addEventListener('click',function(){
    count = count - 1;
    value.textContent = count;
    if(count < 0){
        value.style.color = "#ec0101";
    }
});

btnIncrease.addEventListener('click',function(){
    count = count + 1;
    value.textContent = count;
    if(count > 0){
        value.style.color = "#1a1a2e";
    }
});

btnReset.addEventListener('click',function(){
    count = 0;
    value.textContent = count;
    if(count == 0){
        value.style.color = "#1b262c";
    }
});
