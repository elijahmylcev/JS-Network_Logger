let oldXHROpen = window.XMLHttpRequest.prototype.open;
const stackForLinked = [];
localStorage.setItem('Logger', stackForLinked)

window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
  this.addEventListener('load', function () {
    stackForLinked.push(JSON.parse(this.response));

  })

  return oldXHROpen.apply(this, arguments)
}

// if (stackForLinked.length === 10) {

// }

export default stackForLinked;