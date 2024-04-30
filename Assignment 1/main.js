function calculateArea(radius) {
    var area = Math.PI * radius * radius;
    return area;
}
var radius = 5;
var area = calculateArea(radius);
console.log("The area of a circle with radius ".concat(radius, " is ").concat(area.toFixed(2)));
