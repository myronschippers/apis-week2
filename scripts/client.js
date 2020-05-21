console.log('Hello Apis!!!');

// const
// let

let kittyKat = 'Fluffy'; // allows reassigning variable value
const doggy = 'value'; // value cannot be reassigned

kittyKat = 'Lil Mr';
console.log('kittyKat:', kittyKat);

// number 0 1 2 3 3000
kittyKat = 3;
console.log('kittyKat:', kittyKat);

// string ' ' 'dog' 'Kat'
kittyKat = '5';
console.log('kittyKat:', kittyKat);

// boolean true false
kittyKat = false;
console.log('kittyKat:', kittyKat);


const basketMaxFruit = 6;
const fruitPurchased = '6';

if (fruitPurchased < basketMaxFruit) {
  console.log('You can carry more fruit.');
} else if (fruitPurchased === basketMaxFruit) {
  console.log('Your basket is full.');
} else {
  console.log('You have too much fruit.');
}

if (!kittyKat) {
  console.log('Kitty is a false');
}

// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// == evaluates value only
// === evaluates value and type
// != does not equal - only value
// !== does not eauql - value and type
// ! checking for falsy value

let isSnowing;

// falsy values are: false, '', null, undefined, 0
if (!isSnowing) {
  console.log('Hurray it\'s not snowing');
}
