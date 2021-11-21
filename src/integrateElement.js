export function integrateElement(address) {
  const newDiv = document.createElement('div');

  if (!address) {
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

  const start = document.querySelector('.start');
  const parentDiv = start.parentNode;
  parentDiv.insertBefore(newDiv, start);
}
