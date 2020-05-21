console.log('Hello Apis!!!');

// declare a variable
// const
// let

const doggy = 'Bowser';
console.log('doggy:', doggy);
let kittyKat = 'Fluffy';

console.log('kittyKat:', kittyKat);

// string '', ' ', 'Apis', '3', 'ture'
kittyKat = 'Spike';
console.log('kittyKat:', kittyKat);

// boolean = true or false
kittyKat = false;
console.log('kittyKat:', kittyKat);

// number 0, 1, 2, 3000
kittyKat = 3;
console.log('kittyKat:', kittyKat);


const basketMaxFruit = 6;
const fruitForPurchase = 6;

if (fruitForPurchase < basketMaxFruit) {
  console.log('You can carry more fruit.');
} else if (fruitForPurchase === basketMaxFruit) {
  console.log('Your basket is full.');
} else {
  console.log('You have too much fruit.');
}

// < less than
// > greater than
// <= less than or equal to
// >= greater than or euqal to
// == evaluates value only
// === evaluate both value and type
// != does not equal evaluate value only
// !== does not equal evalutaing value and type
// ! checking for falsy value

let isSnowing;
console.log('isSnowing: ', isSnowing);
isSnowing = '';
console.log('isSnowing: ', isSnowing);
isSnowing = false;
console.log('isSnowing: ', isSnowing);
isSnowing = 0;
console.log('isSnowing: ', isSnowing);
isSnowing = null;
console.log('isSnowing: ', isSnowing);

// falsy values: undefined, '', false, 0, null
if (!isSnowing) {
  console.log('Yay!!!!! It\'s not snowing.');
}
