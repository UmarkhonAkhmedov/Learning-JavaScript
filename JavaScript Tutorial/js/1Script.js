// Learning Function and Loops
// Function

function fun() {
  alert('this is a function');
}
 fun();

function greeting(){
  var name = prompt('What is your name?');
  var result = 'Hello ' + name;
  console.log(result);
}
greeting();

function sumNumbers(num1, num2){
  var result = num1 + num2;
  console.log(result);
}
sumNumbers(10, 10);

// Loop
// While loops
var num = 0;
while(num < 100){
  num += 1;
  console.log(num);
}

// For loops
for(let num = 0; num < 100; num++){
  console.log(num);
}

// String methods
// \n - new line
let fruit = 'banana';
console.log(fruit.length);
console.log(fruit.indexOf('an')); // it gives starting of index
console.log(fruit.slice(2, 6)); // slicing from 2 to 6
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(Fruit.split('')); // (',')

// Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
let fruits = new Array ['banana', 'apple', 'orange', 'pineapples'];

 for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
 }

// Array Common Methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));


//  Objects in JavaScript
let student = {first: 'Rafeh', last: 'Qazi'};
console.log(student.first);
