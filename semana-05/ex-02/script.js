function calc() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (n) {
        sum += n;
    });
    return sum;
}
console.log(calc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
