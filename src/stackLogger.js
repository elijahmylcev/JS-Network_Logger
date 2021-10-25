let oldXHROpen = window.XMLHttpRequest.prototype.open
const stackForLinked = []

window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
    this.addEventListener('load', function () {
        stackForLinked.push(JSON.parse(this.response));
        // console.log(stackForLinked);
    })

    return oldXHROpen.apply(this, arguments)
}

export default stackForLinked;
