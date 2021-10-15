/////////////////////////////////////////////////
// MAP Method
// const people = [
//   {
//     name: 'bob',
//     age: 20,
//     position: 'developer',
//   },
//   {
//     name: 'anna',
//     age: 25,
//     position: 'designer',
//   },
//   {
//     name: 'susy',
//     age: 30,
//     position: 'the boss',
//   },
//   {
//     name: 'john',
//     age: 26,
//     position: 'intern',
//   },
// ];

// // 
// // Two Ways of Defining Map Method
// const getAges = (person)=> person.age * 2

// const ages = people.map((getAges))
// const ages = people.map((person) => person.age * 2)
// const ages = people.map((person) => {
//   return person.age * 2;
// })
// console.log(ages);

// // 
// // Creating Objects
// const newPeople = people.map((item)=>{
//   return {
//     firstName: item.name.toUpperCase(),
//     oldAge: item.age + 20,
//   };
// })
// console.log(newPeople);


// // 
// const names = people.map((person) => `<h2>${person.name}</h2>`);
// const result = document.querySelector('#result');

// result.innerHTML = names.join('');


/////////////////////////////////////////////////
// Unique Values
// const menu = [
//   {
//     name: 'pancakes',
//     category: 'breakfast',
//   },
//   {
//     name: 'burger',
//     category: 'lunch',
//   },
//   {
//     name: 'steak',
//     category: 'dinner',
//   },
//   {
//     name: 'bacon',
//     category: 'breakfast',
//   },
//   {
//     name: 'eggs',
//     category: 'breakfast',
//   },
//   {
//     name: 'pasta',
//     category: 'dinner',
//   },
// ];

// // This return unique values in menu in category
// const categories = [...new Set(menu.map((item) => item.category))];
// console.log(categories);


// const result = document.querySelector('.result');
// result.innerHTML = categories.map((category) => {
//   return `<button>${category}</button>`;
// }).join('');


/////////////////////////////////////////////////
// Dynamic Object Keys

// Dot Notation
// const person = {
//   name: 'john',
// };
// console.log(person.name);
// console.log(person);

// // Square Bracket Notation
// const items = {
//   'featured-items': ['item', 'item2']
// }
// console.log(items["featured-items"]);
// console.log(person['name']);


// let appState = 'loading';
// const keyName = 'computer'
// const app = {
//   [appState]:true
// }
// app[keyName] = 'apple'
// console.log(app);


// const state = {
//   loading: true,
//   name: '',
//   job: ''
// }

// function updateState(key, value){
//   state[key] = value
// }
// // Update the value
// updateState('name', 'john');
// console.log(state);


/////////////////////////////////////////////////
// Filter and Find
// Filter
// const people = [
//   {name: 'bob', age: 20, position: 'developer'},
//   {name: 'peter', age: 25, position: 'designer'},
//   {name: 'susy', age: 30, position: 'the boss'},
//   {name: 'anna', age: 35, position: 'intern'},
// ]

// const youngPeople = people.filter((person) => {
//   // if(person.age < 30){
//   //   return person;
//   // }
//   return person.age < 30;
// });


// const developers = people.filter((person) => person.position === 'developer');


// // Find
// const peter = people.find((person) => person.name === 'peter');
// const fruits = ['orange', 'pear', 'lemon']
// const fruit = fruits.find((fruit)=>fruit === 'lemon');


/////////////////////////////////////////////////
// Reduce Basics
// const staff = [
//   { name: 'bob', age: 20, position: 'developer', salary: 100 },
//   { name: 'peter', age: 25, position: 'designer', salary: 300 },
//   { name: 'susy', age: 30, position: 'the boss', salary: 400 },
//   { name: 'anna', age: 35, position: 'intern', salary: 10 },
// ];


// const dailyTotal = staff.reduce((total, person) => {
//   total += person.salary;
//   return total;
// }, 0)

/////////////////////////////////////////////////
// Reduce Objects
// const cart = [
//   {
//     title: 'Samsung Galaxy S7',
//     price: 599.99,
//     amount: 1,
//   },
//   {
//     title: 'Google pixel ',
//     price: 499.99,
//     amount: 2,
//   },
//   {
//     title: 'Xiaomi Redmi Note 2',
//     price: 699.99,
//     amount: 4,
//   },
//   {
//     title: 'Xiaomi Redmi Note 5',
//     price: 399.99,
//     amount: 3,
//   },
// ]

// let total = cart.reduce((total, cartItem) => {
//   const {amount, price} = cartItem;
//   // Count Items
//   total.totalItems += amount;
//   // Count Sum
//   total.cartTotal += amount * price;
//   return total;
// }, {
//   totalItems = 0,
//   cartTotal: 0,
// })


// const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'


// const fetchRepos = async () => {
//   const respone = await fetch(url);
//   const data = await Response.json();
//   const newData = data.reduce((total, repo) => {
//     const {language} =repo;
//     if(language){
//       if(total[language]){
//         total[language] = total[language] + 1 ;
//       }else {
//         total[language] = 1
//       }
//     }

//     if(language){
//       total[language] = total[language] + 1 || 1
//     }

//     return total;

//   }, {})
// }

// fetchRepos()

/////////////////////////////////////////////////
// Destructing Array

// const fruits = ['orange', 'banana', 'lemon'];
// const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

// const [john] = friends;
// console.log(john);


// let first = 'bob';
// let second = 'john';

// [second, first] = [first, second];
// console.log(first, second);

/////////////////////////////////////////////////
// Destructing Object

// const bob = {
//   first: 'bob',
//   last: 'sanders',
//   city: 'chicago',
//   siblings: {
//     sister: 'jane',
//   },
// };

// const {first, last, city, siblings:{sister}} = bob

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;


// function printPerson({first, last}){
//   // const {first, last} = person;
//   console.log(first, last);
// }

// printPerson(bob);


/////////////////////////////////////////////////
// Rest Operator
// Arrays
// const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];

// const [first, ...restOfTheFruits] = fruits;
// // Delete first item and get other all parts
// const soecificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');

// // Objects
// const person = { name: 'john', lastName: 'smith', job: 'developer' };

// const {job, ...rest} = person;
// console.log(job, rest);

// // Functions
// const getAverage = (name,  ...scores){
//   console.log(name);
//   console.log(scores);
//   const average = scores.reduce((total, item) =>{return total += item},0)/scores.length;
// }

// getAverage(person.name, 89, 76, 81, 100)


/////////////////////////////////////////////////
// Spread Operator
// const udemy = 'udemy';

// const letters = [...udemy];
// console.log(letters);

// const boys = ['john', 'peter', 'bob'];
// const girls = ['susan', 'anna'];
// const friends = [...boys, ...girls, bestFriend];

// const bestFriend = 'arnold';


/////////////////////////////////////////////////
// Array From

// const udemy = 'udemy';

// console.log(Array.from(udemy));

// const items = Array.from({length: 120}, (_, index) => {
//   return index;
// })
// console.log(items);


// const itemsPage = 10;
// const pages = Math.ceil(items.length / itemsPage);

// console.log(pages);

// const newItems = Array.from({length: pages}, (_, index) =>{
//   const start = index * itemsPerPage;
//   const temItems = items.clice(sart, start + itemsPerPage);

//   return temItems;
// })

// console.log(newItems);


/////////////////////////////////////////////////
// Optional Chaining
// const people = [
//   {
//     name: 'bob',
//     location: { street: '123 main street', timezone: { offset: '+7:00' } },
//   },
//   { name: 'peter', location: { street: '123 Pine street' } },
//   {
//     name: 'susan',
//     location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
//   },
// ]

// people.forEach((person) => {
//   console.log(person.location.timezone.offset);

// })

// console.log(person.location && person.location.timezone && person.location.timezone.offset);

// console.log(person?.location?.timezone?.offset);


/////////////////////////////////////////////////
// Callback Functions
function makeUppercase(value){
  console.log(value.toUpperCase())
}

makeUppercase('peter');


function handleName(name, cb){
  const fullName = `${name} smith`
  cb(fullName);
}

handleName('peter', makeUppercase())












