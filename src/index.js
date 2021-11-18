import '@babel/polyfill'
import './style.scss'
import * as stackLogger from './stackLogger';

const btnGetPhotoFox = document.querySelector('.btn')

document.addEventListener('DOMContentLoaded', getElement(IntegrateElement))

btnGetPhotoFox.addEventListener('click', () => {
  const element = document.querySelector('.wrapper');
  if (element) {
    element.remove();
  }
  getElement(IntegrateElement);
})

function getElement(callback) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://randomfox.ca/floof/');

  xhr.send();

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);      
    } else {
      console.log(stackLogger.stackItem);
      callback(JSON.parse(xhr.response).image)

      // Отправка на сервер для записи в стек
      fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: stackLogger.stackItem
    })
    }
  };

  xhr.onerror = function() {
    console.log('Ошибка');
  }
}

function IntegrateElement(address) {
  let newDiv = document.createElement('div');

  if (!address || address == '' || address == undefined) {
    newDiv.innerHTML = `
    <div class="wrapper">
      <div class = "fail">OOOps!
      </div>
    </div>
    `
  } else {
    newDiv.innerHTML = `
    <div class="wrapper">
        <div class="wrapper__img">
            <img class="wrapper__img_photo" src=${address} alt="Photo">
        </div>
    </div>
    `
  }

  const start = document.querySelector('.start')
  const parentDiv = start.parentNode
  parentDiv.insertBefore(newDiv, start)
}

module.exports