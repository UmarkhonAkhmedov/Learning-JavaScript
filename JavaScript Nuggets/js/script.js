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


const state = {
  loading: true,
  name: '',
  job: ''
}

function updateState(key, value){
  state[key] = value
}
// Update the value
updateState('name', 'john');
console.log(state);
