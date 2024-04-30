function calculateAverage(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    return average;
}

const numArray = [5, 10, 15, 20];
const avg = calculateAverage(numArray);
console.log(`The average of the numbers is ${avg.toFixed(2)}`);