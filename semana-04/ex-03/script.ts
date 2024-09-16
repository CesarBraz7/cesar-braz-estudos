const array: (string | number)[] = [1, "a", 2, "b", 3, "c"];

function revertArray<T extends number | string>(arr:T[]): T[]{
    let arrayToBeRevert: (string | number)[] = arr;

    return arr.reverse();
}

console.log(`original array: ${array}\nreversed array: ${revertArray(array)}`);