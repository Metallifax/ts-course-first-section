const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const vehicle = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('ranger');

// Help with 'map'
carMakers.map((car: string): string => car.toUpperCase());

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-11-10');
importantDates.push(new Date());