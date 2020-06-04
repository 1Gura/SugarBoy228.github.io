'use sctrict'

// class Task {
//   constructor(params) {
//     this.taskTitle = params.taskTitle;
//     this.taskComments = params.taskComments;
//   }
// }

// class TaskList {
//   constructor(params) {
//     this.tasks = tasks;

//   }

//    function(task) {
//     this.tasks.push(task);
//   }	
// }

// let taskList = new TaskList({
//   tasks: []
// })

// function addTask () {
  

// }


let taskList = document.querySelector('.main-container__task-list')
let items = document.querySelectorAll('.main-container__task')
let btn = document.querySelector('.task-add__button');
let key = document.querySelector('body');
let content = document.querySelector('.main-container__point');
let title = document.querySelector('.main-container__task-list-empty');
let input = document.querySelector('.main-container__input');
let taskButton = document.querySelector('.main-container__task-button');
let taskButtonComments = document.querySelector('.main-container__strelka')
var task = document.querySelector('.main-container__task')
let text = document.querySelector('.main-container__textarea');
let textError = document.querySelector('.task-add__error');
let inputTask = document.querySelector('.main-container__item-input');
let inputText = document.querySelector('.main-container__item-text')
let editing = document.querySelector('.main-container__editing');
let strikethrough = document.querySelector('.main-container__strikethrough')
let redTasks = document.querySelector('.main-container__--red');
let yellowTasks = document.querySelector('.main-container__--yellow');
let blueTasks = document.querySelector('.main-container__--blue');
let allTasks = document.querySelector('.all');
let targetButtons = document.querySelector('.main-container__menu')
var el;
var k=0;
function addBlock() {
  // p1.innerHTML =
  //  '<li><h2 class = "text-center">'+input.value+'</h2> <p>'+text.value+'</p></li>' ; 
  // p1.classList.add('test-task');
  // content.appendChild(p1);
  if(input.value === "" )  {
    //Заменить на подчеркивание поля
    input.classList.add('error');
    textError.classList.remove('hide')
  }
  else {
  
    content.insertAdjacentHTML('beforebegin','<li class="main-container__task "><button class="main-container__task-button opacity"></button><button class="main-container__strelka opacity"></button> <button class="main-container__editing opacity"></button> <button class="main-container__strikethrough  opacity"></button> 	<button class="main-container__red-priority  opacity"></button><button class="main-container__yellow-priority  opacity"></button><button class="main-container__blue-priority  opacity"></button> <input class="main-container__item-input blue-input" readonly maxlength="39" type="text" placeholder="Введите задачу"  value = '+input.value+'></input><textarea readonly maxlength="264" placeholder="Введите комментарий" class="main-container__item-text">'+text.value+'</textarea></li>')
  input.value = "";
  text.value = "";
  input.classList.remove('error');
  textError.classList.add('hide')
  k++;
  if(k!==0) {
  title.style.display = 'none';
  }
  else title.style.display = 'block';
}
}

function addBlockKye(ev) {
  if(ev.keyCode === 13) {
    if(input.value === "" )  {
      //Заменить на подчеркивание поля
      input.classList.add('error');
      textError.classList.remove('hide')
    }
    else {
      content.insertAdjacentHTML('beforebegin','<li class="main-container__task "><button class="main-container__task-button opacity"></button><button class="main-container__strelka opacity"></button> <button class="main-container__editing opacity"></button> <button class="main-container__strikethrough  opacity"></button> 	<button class="main-container__red-priority  opacity"></button><button class="main-container__yellow-priority  opacity"></button><button class="main-container__blue-priority  opacity"></button> <input class="main-container__item-input blue-input" readonly maxlength="39" type="text" placeholder="Введите задачу" value = '+input.value+'></input><textarea readonly maxlength="264" placeholder="Введите комментарий" class="main-container__item-text">'+text.value+'</textarea></li>')
    input.value = "";
    text.value = "";
    input.classList.remove('error');
    textError.classList.add('hide')
    k++;
    if(k!==0) {
      title.style.display = 'none';
    }
    else title.style.display = 'block';
    }
  }
}


function deleteTask(task) {
  task.parentNode.remove();
  k--;
    if(k!==0) {
      title.style.display = 'none';
    }
    else title.style.display = 'block';
}

function hideComments(task) {
  el = task.parentNode;
  el.classList.toggle('opened');
}

btn.addEventListener('click', addBlock);
key.addEventListener('keydown', addBlockKye);
taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__task-button')) {
    deleteTask(event.target);
  }
});

taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__strelka')) {
    hideComments(event.target)
    
  }
});

function editingTask(el) {
  let elem1 = el.parentNode.children[7];
  let elem2 = el.parentNode.children[8];
  if(elem1.hasAttribute('readonly')) {
    elem1.removeAttribute('readonly');
    elem2.removeAttribute('readonly');
    console.log(elem1);
    console.log(elem2);
    
  }

  else {
    elem1.setAttribute('readonly',true);
    elem2.setAttribute('readonly', true);
  }
  
  
}

taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__editing')) {
    editingTask(event.target)
    
  }
});


function strikethroughTask(el) {
  let elem1 = el.parentNode.children[7];
    elem1.classList.toggle('strikethrough');
    console.log(elem1);
    
}

taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__strikethrough')) {
    strikethroughTask(event.target)
  }
});

function red(el) {
  let elem1 = el.parentNode.children[7];
  elem1.classList.add('red-input');
  elem1.classList.remove('blue-input' , 'yellow-input');
  console.log(elem1);
}

taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__red-priority')) {
    red(event.target)
  }
});

function yellow(el) {
  let elem1 = el.parentNode.children[7];
  elem1.classList.add('yellow-input');
  elem1.classList.remove('blue-input' , 'red-input');
  console.log(elem1);
}

taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__yellow-priority')) {
    yellow(event.target)
  }
});

function blue(el) {
  let elem1 = el.parentNode.children[7];
  elem1.classList.add('blue-input');
  elem1.classList.remove('red-input' , 'yellow-input');
  console.log(elem1);
}

taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__blue-priority')) {
    blue(event.target)
  }
});

function redShow(el) {
 let element =  el.parentNode.parentNode.parentNode.children[1].children[2];
 for(let i = 0; i<element.children.length; i++) {
  if(element.children[i].classList.contains('main-container__task')) {
    if(element.children[i].children[7].classList.contains('red-input')) {
     element.children[i].classList.remove('hide');
     console.log('Содержит Red');
    } 
    else {
      element.children[i].classList.add('hide');
    }
  }

}
}

targetButtons.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__--red')) {
    redShow(event.target) 
  }
});

function yellowShow(el) {
  let element =  el.parentNode.parentNode.parentNode.children[1].children[2];
  for(let i = 0; i<element.children.length; i++) {
   if(element.children[i].classList.contains('main-container__task')) {
     if(element.children[i].children[7].classList.contains('yellow-input')) {
      element.children[i].classList.remove('hide');
      console.log('Содержит Yellow');
     } 
     else {
       element.children[i].classList.add('hide');
     }
   }
 
 }
 }

targetButtons.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__--yellow')) {
    yellowShow(event.target) 
  }
});

function blueShow(el) {
  let element =  el.parentNode.parentNode.parentNode.children[1].children[2];
  for(let i = 0; i<element.children.length; i++) {
   if(element.children[i].classList.contains('main-container__task')) {
     if(element.children[i].children[7].classList.contains('blue-input')) {
      element.children[i].classList.remove('hide');
      console.log('Содержит Blue');
     } 
     else {
       element.children[i].classList.add('hide');
     }
   }
 
 }
 }

targetButtons.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__--blue')) {
    blueShow(event.target) 
  }
});

function allShow(el) {
  let element =  el.parentNode.parentNode.parentNode.children[1].children[2];
  for(let i = 0; i<element.children.length; i++) {
   if(element.children[i].classList.contains('main-container__task')) {
      element.children[i].classList.remove('hide');
   }
 }
 }

targetButtons.addEventListener('click', function(event) {
  if(event.target.classList.contains('all')) {
    allShow(event.target) 
  }
});




