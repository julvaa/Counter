

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const show = document.getElementById("show");
let result = 0;

function i(){
    result++;
show.textContent = result;
}
increase.onclick = i;

function r(){
    result=0;
    show.textContent = result;
 }
 reset.onclick = r;

 function d(){
    result--;
    show.textContent = result;
 }
 decrease.onclick = d;

