setTimeout(() => {
  console.log(Date.now());
}, 1000);

// Create id's in Learning Apps
let people = [];
people = [...people,{id:Date.now(), name: 'peter'}];

setTimeout(() => {
  people = [...people,{id:Date.now(), name: 'peter'}];
  console.log(people);
}, 1000);


// Create and Get dates
console.log(new Date(1632961557647));

const now = Date.noe();
const futureDate = new Date(now + );

// Difference between dates

const firstDate = new Date();
const secondDate = new Date(2022, 8, 28)

const firstValue = firstDate.getTime();
const secondValue = firstDate.getTime();

