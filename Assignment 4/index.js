function findMax(numbers) {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
function findMin(numbers) {
    var min = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
var numArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
var maxNumber = findMax(numArray);
var minNumber = findMin(numArray);
console.log("The maximum number is ".concat(maxNumber));
console.log("The minimum number is ".concat(minNumber));
