// Example 1

const arr = [...Array(20)];

const newArr = arr.map(el => {
    return Math.floor(Math.random() * 10);
})
console.log(newArr);


// Example 2

for (i = 0; i < newArr.length; i++) {
    if (newArr[i] % 3 === 0) {
        console.log(newArr[i]);
    }
}
 

// Example 3

for (j = 0; j < newArr.length; j++) {
    if (newArr[j] > 7) {
        console.log(newArr[j]);
        break;
    }
}


// Example 4

const newArr2 = newArr.map(el =>{
    return el * 2;
})

console.log(newArr2);


// Example 5

let newArr3 = 0;
for (let k = 0; k < newArr.length; k++) {
    if (newArr[k] % 2 === 0) {
        newArr3 += newArr[k];
    }
}

console.log(newArr3);


// Example 6

let del = newArr.map(el => {
    return el;
});

del.splice(0, 1);

console.log(del);

del.splice(-1, 1);

console.log(del);


// Example 7 with star

const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'cat', 'cat', 'ball', 'horse'];

let arrayThree = [];
for (l = 0; l < arrayOne.length; l++) {
	for (e = 0; e < arrayTwo.length; e++) {
  	if (arrayOne[l] === arrayTwo[e]) {
    	arrayThree.push(arrayOne[l]);
    }
  }
}

console.log(arrayThree);