function findMax(numbers: number[]): number {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function findMin(numbers: number[]): number {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

const numArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const maxNumber = findMax(numArray);
const minNumber = findMin(numArray);

console.log(`The maximum number is ${maxNumber}`);
console.log(`The minimum number is ${minNumber}`);