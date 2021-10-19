import '@babel/polyfill'
import './style.scss'

let xhr = new XMLHttpRequest();
const adress = 'https:\/\/randomfox.ca\/images\/92.jpg'
let newDiv = document.createElement('div')
function GetIndex() {
  return Math.floor(Math.random()*100)
}

function getAdress() {
  const randomIndex = GetIndex()
  xhr.open('GET', `https:\/\/randomfox.ca\/images\/${randomIndex}.jpg`)
  xhr.send()
}


function getElement(adress) {

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

getElement(adress)
