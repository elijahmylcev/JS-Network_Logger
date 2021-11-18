let oldXHROpen = window.XMLHttpRequest.prototype.open;
let stackItem = [];

window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
  this.addEventListener('load', function () {
    stackItem.push(JSON.parse(this.response));
    // return stackItem
  })
  return oldXHROpen.apply(this, arguments)
};

console.log(stackItem);

module.exports
