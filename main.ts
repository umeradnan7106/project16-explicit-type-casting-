// home work
// difference between any and unknown
// step06 
// test step10 tak hoga


let num2: any
num2 = 4
num2 = 'ac'
num2 = []

let num1:unknown 
num1 = "billa"
num1 = 4 
num1 = true
num1 = []


let num3: unknown = 18;
let result: number = num3 as number; // explicit type casting
let Result: number = <number>num3; // explicit type casting
console.log(result);

let num4: unknown = 'umer';
let answer: number = num4 as number; // explicit type casting
let Answer: number = <number>num4; // explicit type casting
console.log(answer);

