// Array of numbers
let numbers = [1, 2, 3, 4, 5, 6];

// OLD WAY DO NOT USE THESE
// take a list of numbers and square them
const squareNumsOld = numbers.map(function (n) {
  return n * n;
});
console.log(squareNumsOld);

let evens = []; // var evens = [];
numbers.forEach(function (n) {
  if (n % 2 === 0) {
    evens.push(n);
  }
});
console.log(evens);

// NEW WAY using arrow function
const squares = numbers.map((n) => n * n);
console.log(squares);
evens = [];
numbers.forEach((n) => {
  if (n % 2 === 0) {
    evens.push(n);
  }
});
console.log(evens);

const author = {
  fullName: "Bob Alice",
  books: [],
  printBooks() {
    // loop through and print all book names with author's fullName
    this.books.forEach(aBookName => console.log(`${aBookName} by ${this.fullName}`));
  },
};
// console.log(author);
author.fullName = "Nadia Goralski";
author.books.push("My Book 1");
author.books.push("My Book 2");
author.books.push("My Book 3");
// console.log(author);
author.printBooks();