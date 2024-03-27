//przy wcisnieciu przycisku submit beda pobierane dane z pola username i wypisane jako naglowek
// const username = document.getElementById('username');
// const button = document.getElementById('button'); 
// const output = document.getElementById('output');
// const header = document.getElementById('header');

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



// increase.onclick = function(){
//     result++;
//     show.textContent = result;
// }

// function out(){

//     header.innerHTML = username.value;    
// }
// button.addEventListener('click',out);

// document.getElementById("output").innerHTML = 1;
