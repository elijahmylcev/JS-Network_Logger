const oldXHROpen = window.XMLHttpRequest.prototype.open;

const store = [];
const errors = [];

window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
  // this.addEventListener('load', function () {
  //   store.push(JSON.stringify({ ...JSON.parse(this.response), time: Date.now() }));
  // });
  this.onload = () => {
    console.dir({ logger: true });
    store.push(JSON.stringify({ ...JSON.parse(this.response), time: Date.now() }));
  };
  this.onerror = (error) => {
    errors.push({ error });
  };
  this.addEventListener('error', (error) => {
    console.dir({ error });
  })
  return oldXHROpen.apply(this, arguments);
};

export { store, errors };
