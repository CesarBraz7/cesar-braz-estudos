function calc(...nums: number[]): number {
    let sum: number = 0;
    
    nums.forEach(n => {
        sum += n;
    });

    return sum;
}

let result: number = calc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(`sum: ${result}`);