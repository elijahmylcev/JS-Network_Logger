let oldXHROpen = window.XMLHttpRequest.prototype.open;
let stackItem;

export default window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
  this.addEventListener('load', function () {
    stackItem = JSON.stringify({...JSON.parse(this.response), "time": Date.now()});
    return stackItem
  })
  return oldXHROpen.apply(this, arguments)
};

console.log(stackItem);

export {stackItem}
