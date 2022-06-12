const itSchool = 'Hillel';
const age = 123456;
let number = false;

console.log(`value: $(itSchool); $(typeof itSchool)`);
console.log(`value: $(age); $(typeof age)`);
console.log(`value: $(number); $(typeof number)`);

function logType(val) {
    alert(`value: ${val};  ${typeof val}`);
}

logType(itSchool);
logType(age);
logType(number);



// Or second option

// alert(`value: $(itSchool); $(typeof itSchool)`);
// alert(`value: $(age); $(typeof age)`);
// alert(`value: $(number); $(typeof number)`);

