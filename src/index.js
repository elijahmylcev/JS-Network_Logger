import '@babel/polyfill'
import './style.scss'

let newDiv = document.createElement('div');
const btnGetPhotoFox = document.querySelector('.btn')

btnGetPhotoFox.addEventListener('click', (event) => {
  getElement(IntegrateElement);
})

function getElement(callback) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://randomfox.ca/floof/')

  xhr.onload = function () {
    callback(JSON.parse(xhr.response).image)
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

getElement(IntegrateElement)