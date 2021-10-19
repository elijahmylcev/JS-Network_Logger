import '@babel/polyfill'

const adress = 'https:\/\/randomfox.ca\/images\/92.jpg'

function getElement(adress) {
  let newDiv = document.createElement('div')

  newDiv.innerHTML = `
<div class="wrapper">
    <div class="wrapper__img">
        <img class="wrapper__img_photo" src=${adress} alt="Photo">
    </div>
    <button class="wrapper__btn">Get Photo</button>
</div>
`
const start = document.querySelector('.start')
const parentDiv = start.parentNode
  parentDiv.insertBefore(newDiv, start)
}

getElement(adress)
import './style.scss'