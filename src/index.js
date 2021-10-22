import '@babel/polyfill'
import './style.scss'
const stackLogger = require('./stackLogger');

let newDiv = document.createElement('div');
const btnGetPhotoFox = document.querySelector('.btn')
const getListBtn = document.querySelector('.btn-get-list')

document.addEventListener('DOMContentLoaded', getElement(IntegrateElement))

btnGetPhotoFox.addEventListener('click', () => {
  getElement(IntegrateElement);
})

getListBtn.addEventListener('click', () => {
  console.log(stackLogger);
})

function getElement(callback) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://randomfox.ca/floof/')

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {

      callback(JSON.parse(xhr.response).image)

      // console.log(`Получили ${xhr.response.length} байт`);
    }
  }

  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      console.log(`Поулчено ${event.loaded} из ${event.total}`);
    }
  }

  xhr.send()
}

function IntegrateElement(adress) {

  if (!adress || adress == '') {
    newDiv.innerHTML = `
      <div class = "fail">OOOps!
      </div>
    `
  } else {
    newDiv.innerHTML = `
    <div class="wrapper">
        <div class="wrapper__img">
            <img class="wrapper__img_photo" src=${adress} alt="Photo">
        </div>
    </div>
    `
  }

  const start = document.querySelector('.start')
  const parentDiv = start.parentNode
  parentDiv.insertBefore(newDiv, start)
}

module.exports 