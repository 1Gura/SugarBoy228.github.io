'use sctrict'

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
let inputText = document.querySelector('.main-container__task-text')
let editing = document.querySelector('.main-container__editing');
let strikethrough = document.querySelector('.main-container__strikethrough')
let redTasks = document.querySelector('.main-container__--red');
let yellowTasks = document.querySelector('.main-container__--yellow');
let blueTasks = document.querySelector('.main-container__--blue');
let allTasks = document.querySelector('.all');
let targetButtons = document.querySelector('.main-container__menu')
var el;


function initialState() {
  let item = localStorage.getItem('store');
  if(item  === null) {
    title.style.display = 'block';
    
  }
  else {
    taskList.innerHTML = item;
    title.style.display = 'none';
  }
}

initialState();

let store = ('');
function addToStorage() {
  store = taskList.innerHTML;
  localStorage.setItem('store',store)
  //console.log(store);
}

function addBlock() {
  if(input.value === "" )  {
    input.classList.add('error');
    textError.classList.remove('hide')
  }
  else {

  let item = ('<li class="main-container__task "><p class="error-message">Превышенно допустимое количество символов!</p><button class="main-container__task-button opacity"></button><button class="main-container__strelka opacity"></button> <button class="main-container__editing opacity"></button> <button class="main-container__strikethrough  opacity"></button> 	<button class="main-container__red-priority  opacity"></button><button class="main-container__yellow-priority  opacity"></button><button class="main-container__blue-priority  opacity"></button> <p class="main-container__task-title blue-input" maxlength="39">'+input.value+'</p><p class="main-container__task-text">'+text.value+'</p></li>')

  taskList.insertAdjacentHTML('beforeend',item);
  addToStorage();

  input.value = "";
  text.value = "";
  input.classList.remove('error');
  textError.classList.add('hide')
  if(taskList.children.length==0) {
    title.style.display = 'block';
    }
    else title.style.display = 'none';
  }
}

function addBlockKye(ev) {
  if(ev.keyCode === 13) {
    
    if(input.value === "" )  {
      input.classList.add('error');
      textError.classList.remove('hide')
    }
    else {
      
      let item = ('<li class="main-container__task "><p class="error-message">Превышенно допустимое количество символов!</p><button class="main-container__task-button opacity"></button><button class="main-container__strelka opacity"></button> <button class="main-container__editing opacity"></button> <button class="main-container__strikethrough  opacity"></button> 	<button class="main-container__red-priority  opacity"></button><button class="main-container__yellow-priority  opacity"></button><button class="main-container__blue-priority  opacity"></button> <p class="main-container__task-title blue-input" maxlength="39">'+input.value+'</p><p class="main-container__task-text">'+text.value+'</p></li>')
  
    taskList.insertAdjacentHTML('beforeend',item);
    addToStorage();
  
    input.value = "";
    text.value = "";
    input.classList.remove('error');
    textError.classList.add('hide')
    
    if(taskList.children.length===0) {
      title.style.display = 'block';
    }
    else title.style.display = 'none';
  }
  }
}


function deleteTask(task) {
  task.parentNode.remove();
  
  addToStorage();
  if(taskList.children.length==0) {
    title.style.display = 'block';
    }
    else title.style.display = 'none';
  
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
  const taskEl = el.closest('.main-container__task');
  const error = taskEl.querySelector('.error-message')
  let taskTitle = taskEl.querySelector('.main-container__task-title');
  let taskText = taskEl.querySelector('.main-container__task-text');
  if (taskTitle.contentEditable === 'true') {
    taskTitle.contentEditable = false;
    taskText.contentEditable = false;
    error.classList.remove('show');
    addToStorage();

  } else {
    taskTitle.contentEditable = true; 
    taskText.contentEditable = true;
    taskEl.addEventListener('keydown', function(event) {
      if(event.keyCode == 13) {
        event.preventDefault();
        taskTitle.contentEditable = false;
        taskText.contentEditable = false;
        error.classList.remove('show');
        addToStorage();
      }
      else {
      if(taskTitle.textContent.length > 50) {
        error.classList.add('show');
        if(event.keyCode != 8) {
        event.preventDefault();
        }
      }
      else {
        error.classList.remove('show');
        }
      }
    })
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
    //console.log(elem1);
    addToStorage();
}

taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__strikethrough')) {
    strikethroughTask(event.target)
  }
});

function red(el) {
  const taskEl = el.closest('.main-container__task');
  const taskTitle = taskEl.querySelector('.main-container__task-title');
  taskTitle.classList.add('red-input');
  taskTitle.classList.remove('blue-input' , 'yellow-input');
  
  addToStorage();
}

taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__red-priority')) {
    red(event.target)
  }
});

function yellow(el) {
  const taskEl = el.closest('.main-container__task');
  const taskTitle = taskEl.querySelector('.main-container__task-title');
  taskTitle.classList.add('yellow-input');
  taskTitle.classList.remove('blue-input' , 'red-input');
  
  addToStorage();
}

taskList.addEventListener('click', function(event) {
  if(event.target.classList.contains('main-container__yellow-priority')) {
    yellow(event.target)
  }
});

function blue(el) {
  const taskEl = el.closest('.main-container__task');
  const taskTitle = taskEl.querySelector('.main-container__task-title');
  taskTitle.classList.add('blue-input');
  taskTitle.classList.remove('red-input' , 'yellow-input');
  addToStorage();
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






