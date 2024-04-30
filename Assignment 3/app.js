function calculateAverage(numbers) {
    var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
    var average = sum / numbers.length;
    return average;
}
var numArray = [5, 10, 15, 20];
var avg = calculateAverage(numArray);
console.log("The average of the numbers is ".concat(avg.toFixed(2)));
