import "@babel/polyfill";
import "./style.scss";
import { stack } from "./stackLogger";

document.addEventListener("DOMContentLoaded", getElement(integrateElement));

// Called getItem function
const btnGetPhotoFox = document.querySelector(".btn");
btnGetPhotoFox.addEventListener("click", () => {
  const element = document.querySelector(".wrapper");
  if (element) {
    element.remove();
  }
  getElement(integrateElement);
});

function getElement(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://randomfox.ca/floof/");
  xhr.send();

  xhr.onload = () => {
    if (xhr.status != 200) {
      console.log("error");
    } else {
      callback(JSON.parse(xhr.response).image);
    }
  };
  xhr.onerror = (err) => {
    console.log(err);
  };
}

// xhr.onload = () => {
//   // Отправка на сервер для записи в стек
//   // fetch("http://localhost:3001", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json;charset=utf-8",
//   //   },
//   //   body: stackLogger.stackItem,
//   // });
// };

// xhr.onerror = function () {
//   console.log("Ошибка");
// };

function integrateElement(address) {
  let newDiv = document.createElement("div");

  if (!address || address == "" || address == undefined) {
    newDiv.innerHTML = `
    <div class="wrapper">
      <div class = "fail">
        OOOps!
      </div>
    </div>
    `;
  } else {
    newDiv.innerHTML = `
      <div class="wrapper">
        <div class="wrapper__img">
          <img class="wrapper__img_photo" src=${address} alt="Photo">
        </div>    
      </div>
    `;
  }

  const start = document.querySelector(".start");
  const parentDiv = start.parentNode;
  parentDiv.insertBefore(newDiv, start);
}
