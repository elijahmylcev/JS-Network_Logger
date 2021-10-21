let oldXHROpen = window.XMLHttpRequest.prototype.open
const stackForLinkes = []
window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
    this.addEventListener('load', function () {
        stackForLinkes.push(`load: ${JSON.parse(this.response)}`);
    })

    return oldXHROpen.apply(this, arguments)
}

module.exports