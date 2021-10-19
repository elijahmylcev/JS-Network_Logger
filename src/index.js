import '@babel/polyfill'
import './style.scss'

const adress = 'https:\/\/randomfox.ca\/images\/92.jpg'
let newDiv = document.createElement('div')

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
