import '@babel/polyfill'
import './style.scss'

const adress = ''
let newDiv = document.createElement('div')

function getAdress() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://randomfox.ca/floof/')
  xhr.send()

  xhr.onload = function () {
    adress = JSON.parse(xhr.response).image
    console.log(adress);
    return adress
  }
}


async function getElement() {

  await getAdress()

  if (!adress || adress == '') {
    newDiv.innerHTML = `
      <div class = "fail">OOOps!
        <button class="fail__btn">Get Photo Fox</button>
      </div>
    `
  } else {
    newDiv.innerHTML = `
    <div class="wrapper">
        <div class="wrapper__img">
            <img class="wrapper__img_photo" src=${adress} alt="Photo">
        </div>
        <button class="wrapper__btn">Get Photo Fox</button>
    </div>
    `
  }

  const start = document.querySelector('.start')
  const parentDiv = start.parentNode
  parentDiv.insertBefore(newDiv, start)
}

getElement()