import '@babel/polyfill'
import './style.scss'
import stackLogger from './stackLogger';

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

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {

      callback(JSON.parse(xhr.response).image)
      
    }
  };

  xhr.send();
}

function IntegrateElement(address) {
  let newDiv = document.createElement('div');

  if (!address || address == '') {
    newDiv.innerHTML = `
      <div class = "fail">OOOps!
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