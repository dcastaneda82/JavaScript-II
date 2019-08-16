// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const firstName = 'Daniel';
const lastName = 'Castaneda';

function whoAreU() {
  return `My name is ${firstName} ${lastName}`;
}
console.log(whoAreU());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function () {
    return count++;
  };
  // Return a function that when invoked increments and returns a counter variable.
};

const newCount = counter();
// Example usage: const newCounter = counter();
console.log(newCount());
console.log(newCount());
console.log(newCount());
console.log(newCount());
console.log(newCount());
console.log(newCount());
console.log(newCount());
console.log(newCount());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  const increment = () => {
    let count = 0;
    return function () {
      return count++;
    };
  };
  const gear1 = increment();

  const decrement = () => {
    let count = 0;
    return function () {
      return count--;
    };
  };
  const gear2 = decrement();

  return `${gear1()} ${gear2()}`;

};


// const counterFactory = () => {
//   const increment = () => {
//     let count = 0;
//     return function () {
//       return count++;
//     };
//   };
//   const gear1 = increment();

//   const decrement = () => {
//     let count = 0;
//     return function () {
//       return count--;
//     };
//   };
//   const gear2 = decrement();


// };


console.log(counterFactory());
console.log(counterFactory());
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.