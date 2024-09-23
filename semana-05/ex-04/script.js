function square(value) {
    if (typeof value == 'number') {
        return Math.pow(value, 2);
    }
    else {
        return value.map(function (n) { return Math.pow(n, 2); });
    }
}
console.log("number calc: ".concat(square(7), ". \narray calc: ").concat(square([7, 8, 9, 10]), "."));
