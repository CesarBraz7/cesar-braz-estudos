function square(num: number): number;
function square(array: number[]): number;

function square<T extends number | number[]>(value: T){
    if(typeof value == 'number'){
        return value ** 2
    }
    else{
        return value.map(n => n ** 2);
    }
}

console.log(`number calc: ${square(7)}. \narray calc: ${square([7, 8, 9, 10])}.`)