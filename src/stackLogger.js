let oldXHROpen = window.XMLHttpRequest.prototype.open
const stackForLinkes = []
window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
    this.addEventListener('load', function () {
        stackForLinkes.push(JSON.parse(this.response));
        console.log(stackForLinkes);
    })

    return oldXHROpen.apply(this, arguments)
}

module.exports