let oldXHROpen = window.XMLHttpRequest.prototype.open;
// const stackForLinked = [];

window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
  this.addEventListener('load', function () {
    // stackForLinked.push(JSON.parse(this.response));
    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({...{image: JSON.parse(this.response).image, link: JSON.parse(this.response).link}, time: Date.now()})
    })
  })

  return oldXHROpen.apply(this, arguments)
}

module.exports