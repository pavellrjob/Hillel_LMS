let name = prompt('enter your name', );
let i = 0;

for (let i = 0; i < 4; i++) {
    if (i < 2) {
        console.log('Happy birthday to you');
    } else if (i == 2) {
        console.log(`Happy birthday, dear ${name}`);
    } else {
        console.log('Happy birthday to you');
    }
}


// Example 2

let num = prompt('enter number', );
let j = '';

for (let i = 0; i < num; i++) {
    j += '.#';
}
console.log(j);


// Example 3

let num2 = prompt('Enter numder', );
if (([num2] ?? 0) == 0){
    num2 = prompt('Invalid. You should enter a number', );
}
let sum = 0;


for (let i = 0; sum <= num2; i++) {
    if ((sum + 1) % 2 != 0) {
        sum += 1;
    } else {
        sum += 2;
    }
}
console.log(sum);


// Example 4

let itr = 0;
let run = 0;

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      run = Math.random();
      
      if (run < 0.7) {
        itr += 1;
      } else {
        break;
      }
    } 
  }
  console.log(`Loop was finished because of: ${run}`);
  console.log(`Number of iteration: ${itr}`);

  // Example 5

  for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log ('Div by 5 and 3');
    } else if (i % 3 == 0) {
        console.log('Div by 3');
    } else if (i % 5 == 0) {
        console.log ('Div by 5');
    }
  }
  

  // Example 6

  let today = new Date();
  today.setHours(today.getHours() - today.getTimezoneOffset() / 60)
  let UTCstring = today.toUTCString();
  console.log(UTCstring)


 