const num = 12;

console.log(num.toString(16));
console.log(num.toString(2));

// 2 example

const num2 = prompt(`enter Value`, );

console.log(`${Number(num2) - 2}`);
console.log(`${Number(num2) + 2}`);
console.log(`${Number(num2) * 2}`);
console.log(`${Number(num2) / 2}`);

console.log(`was introduced ${num2.length} simbols`);

// 3 example

let num3 = 0.51000002;
console.log(`${Number(num3.toFixed(2)) + 2}`);


// 4 example

const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps';

console.log (str.indexOf(str_two));

console.log (str.toUpperCase());


// 5 example

let a = 1;
let b = 2;
let c = 3;
let d = 3;

console.log((a == c) || ( c == d)) || ((b == c) || ( c == c)) || ((c == c) || ( c == d));

console.log((a <= c) && ( c == d)) && ((b <= c) && ( c == c)) && ((c <= c) && ( c == d));

// 6 example

console.log(123 == '123');
console.log(123 === '123');

// operator ??

const num6 = prompt(`How old are you?`, );

const age = num6 ?? 0;

console.log(age);