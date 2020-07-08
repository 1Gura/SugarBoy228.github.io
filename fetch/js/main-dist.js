'use strict'
var api = "https://swapi.dev/api/";
    // Формируем полный адрес запроса:
    var url = api + "people/?search="; // добавляем к запросу тип необходимых данных подробно о формате https://swapi.dev/documentation
    //url += "obi"; // значение переменной запроса search

function sendRequest(method, url, body = null) {
 
  return fetch(url).then(response=> {
    if(response.ok) {
      return response.json()
    }
    else {
      return response.json().then(error=> {
        const e = new Error('Что-то пошло не так!')
        e.data = error
        throw e
      })
    }
  })
}


// sendRequest('GET', url)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

let search = document.querySelector('#search_request_btn');
let searchLine = document.querySelector('.person_search');
let list = document.querySelector('.search_result')
let serchPeople = document.querySelector('#serchPeople')
let serchPlanet = document.querySelector('#serchPlanet')
let serchShip = document.querySelector('#serchShip')
let dropDown = document.querySelector('.dropdown') 
let personData = document.querySelector('.person_data')


function out() {
  let req = sendRequest('GET', url).then(data=>console.log(data))
  .catch(err=>console.log(err))
  JSON.parse = req
}
out()


let req = [];
let masList = [];
function outList() {
  list.innerHTML = '';
  masList = [];
 
  
  let urlRequest = url + searchLine.value;
  console.log(urlRequest);
  sendRequest('GET', urlRequest)
    .then(data=> {
      if(searchLine.value == 0) {
        alert('Поле не должно быть пустым!')
      }
      else {
      req = data.results;
      for(let i in req) {
        masList.push(req[i].name);
      }

      if(masList.length == 0){
        alert('Ничего не найдено!')
      }
      for(let i in masList) {
        let item = '<li class = "item-result">'+ masList[i] +'</li>';
        list.insertAdjacentHTML('beforeend',item);
      }
    }
     //Вот так я буду выводить список 
    })
    
    .catch(err=>console.log(err))
}



search.addEventListener('click', function() {
  outList();
});


class People {
  constructor(params) {

  }
  
}


function outInfo(target) {
    const namePerson = target.textContent
    //console.log(namePerson);
    
    for(let i in masList) {
      if(masList[i] == namePerson) {
        let temp = masList[i]
        var index = i
        console.log(index, ' ', temp);
      } 
    }

    console.log(req[index]);

    let name = document.querySelector('#name');
    let height = document.querySelector('#height');
    let mass = document.querySelector('#mass');
    let birth_year = document.querySelector('#birth_year');
    let films_count = document.querySelector('#films_count');
    if(dropDown.value == 'person'){
      name.innerHTML = req[index].name
      height.innerHTML = req[index].height
      mass.innerHTML = req[index].mass
      birth_year.innerHTML = req[index].birth_year
      films_count.innerHTML = req[index].films.length
    }
    else if(dropDown.value == 'planet') {
      name.innerHTML = req[index].name
      height.innerHTML = req[index].climate
      mass.innerHTML = req[index].diameter
      birth_year.innerHTML = req[index].gravity
      films_count.innerHTML = req[index].films.length
    }
    else if(dropDown.value == 'ship') {
      name.innerHTML = req[index].name
      height.innerHTML = req[index].model
      mass.innerHTML = req[index].length
      birth_year.innerHTML = req[index].cargo_capacity
      films_count.innerHTML = req[index].films.length
    }
    
  }

list.addEventListener('click', function() {
  if(event.target.classList.contains('item-result')) {
    outInfo(event.target);
  }
})

function SetCard(sel) {
  //console.log(sel.value);
  list.innerHTML = ''
  if(sel.value == 'person')
  {
    console.log('Поиск персонажей');
    url = api + "people/?search=";
    let item = '<div>Имя: <span id="name"></div><div>Рост: <span id="height"></div><div>Вес: <span id="mass"></div><div>Год рождения: <span id="birth_year"></div><div>В скольки фильмах появлялся: <span id="films_count"></div>'
    personData.innerHTML = item
    
  }
  else if(sel.value == 'planet') {
    console.log('Поиск планет');
    url = api + "planets/?search=";
    let item = '<div>Имя: <span id="name"></div><div>Климат: <span id="height"></div><div>Диаметр: <span id="mass"></div><div>Гравитация: <span id="birth_year"></div><div>В скольки фильмах появлялся: <span id="films_count"></div>'
    personData.innerHTML = item
  }

  else if(sel.value == 'ship') {
    console.log('Поиск кораблей');
    url = api + "starships/?search=";
    let item = '<div>Имя: <span id="name"></div><div>Модель: <span id="height"></div><div>Длина: <span id="mass"></div><div>Грузоподъемность: <span id="birth_year"></div><div>В скольки фильмах появлялся: <span id="films_count"></div>'
    personData.innerHTML = item
  }
}



