var array = [1, "a", 2, "b", 3, "c"];
function revertArray(arr) {
    var arrayToBeRevert = arr;
    return arr.reverse();
}
console.log("original array: ".concat(array, "\nreversed array: ").concat(revertArray(array)));
