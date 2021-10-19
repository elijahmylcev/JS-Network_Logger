import '@babel/polyfill'

const root = document.getElementById('#app')
const newDiv = document.createElement('div')
let start = newDiv = null
const adress = 'https:\/\/randomfox.ca\/images\/92.jpg'
newDiv.innerHTML = `
    <div class="wrapper">
        <div class="wrapper__img">
            <img class="wrapper__img_photo" src=${adress} alt="Photo">
        </div>
        <button class="wrapper__btn">Get Photo</button>
    </div>
`
root.insertBefore(newDiv, start)

import './style.scss'
