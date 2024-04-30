function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
var number = 7;
var result = checkEvenOrOdd(number);
console.log("The number ".concat(number, " is ").concat(result));
