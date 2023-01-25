/*
  Do a print in console like this

  1 is a odd
  2 is a even
  3 is a odd
  4 is a even
  2%2 = 0
  3%2 = 1
*/

let number = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    console.log(number[i], 'is even');
  } else {
    console.log(number[i], 'is odd');
  }
}
