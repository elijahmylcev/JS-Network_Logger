let oldXHROpen = window.XMLHttpRequest.prototype.open;
let stack = [];

export default window.XMLHttpRequest.prototype.open = function (
  method,
  url,
  async,
  user,
  password
) {
  this.addEventListener("load", function () {
    stack.push({
      ...JSON.parse(this.response),
      time: Date.now(),
    });
  });
  return oldXHROpen.apply(this, arguments);
};

export { stack };
