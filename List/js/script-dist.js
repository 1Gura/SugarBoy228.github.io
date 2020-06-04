


'use strict';
console.log("Hi world");


//создание и добавление элемента на страницу

let content = document.querySelector('.main-container__task-list');
let p1 = document.createElement('li');
// let p2 = document.createElement('p');
let btn = document.querySelector('.task-add__button');
let key = document.querySelector('body');
let input = document.querySelector('.main-container__input');
let text = document.querySelector('.main-container__textarea');


function addBlock(ev) {
  p1.innerHTML = 
  '<h2>'+input.value +'</h2><p>'+text.value+'</p>'
  ; 
  content.insertBefore(p1,content.children[0]);
}

function addBlockKye(ev) {
  if(ev.keyCode === 13) {
  p1.innerHTML = '<b class = "text-center">Новый параграф</b>'; 
  p1.classList.toggle('text-center');

  content.insertBefore(p1,content.children[0]);
}
}

btn.addEventListener('click', addBlock)

key.addEventListener('keydown', addBlockKye)
