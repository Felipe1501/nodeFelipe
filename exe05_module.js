console.log(global === this);
console.log(module === this);
console.log(module.exports === this);

this.digaHello = function () {
    console.log(("HELLO!"));
}