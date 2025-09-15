// Solution 1:
const greeter = (myArray, counter) => {
  const greetText = 'Hello';

  for (let i = 0; i < counter; i++) {
    for (const name of myArray) {
      console.log(`${greetText} ${name}`);
    }
  }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Solution 2:
function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join('').toLowerCase();
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


// Solution 3:
const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map(capitalize);
console.log(capitalizedColors);

// Solution 4:
const nums = [1, 60, 34, 30, 20, 5];

function filterLessThan20(arr) {
  return arr.filter(num => num < 20);
}

console.log(filterLessThan20(nums));

// Solution 5:
var array = [1, 2, 3, 4];
const calculateSum = array.reduce((acc, val) => acc + val, 0);
const calculateProduct = array.reduce((acc, val) => acc * val, 1);

console.log(calculateSum);
console.log(calculateProduct);

// Solution 6:
class Car {
  constructor(model, year) {
    Object.assign(this, { model, year });
  }

  toString() {
    return `Model: ${this.model} ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  toString() {
    return `${this.model} has a balance of $${this.balance}.00`;
  }
}

console.log(new Car("Pontiac Firebird Engine", 1976).toString());
console.log(new Sedan("Volvo SD", 2020, 30000).toString());
