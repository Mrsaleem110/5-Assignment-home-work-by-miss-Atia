function calculateArea(radius: number): number {
    const area = Math.PI * radius * radius;
    return area;
}

const radius = 5;
const area = calculateArea(radius);
console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);