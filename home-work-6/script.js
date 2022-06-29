function fillArray(num2, text) {
    const array = [...Array(num2)];
    const arr2 = array.map((num) => num = text);
    console.log(arr2);
}
fillArray(10, 'qwerty');


// function fillArray (num, text) {
//     let array = [];
//     for(let i = 0; i < num; i++) {
//         array[i] = text;
//     }console.log(array);
// }
// fillArray (10, 'qwerty' );

//==========================================

let array2 = [0, 1, 2, null, undefined, 'qwerty', false];
function filterArray (array2, ...arg) {
    return array2.filter(el => (!arg.includes(el)));
}
const result = filterArray (array2, false, undefined, '', 0, null);
console.log(result);


// function filterArray (...args) {
//     let array2 = [0, 1, 2, null, undefined, 'qwerty', false];
//     for (let j = 0; j < array2.length; j++) {
//         for (let k = 0; k < array2.length; k++) {
//             if (array2[j] === args[k]) {
//                 array2.splice([j], 1);
//             }
//         }
//     }
// }
// console.log(array2);
// filterArray (false, undefined, '', 0, null);

//==================================================

function calcSum () {
    console.log(arguments);
    if(!arguments.length) {
        return 'No argum';
    }

    let sum1 = 0;
    for(let n = 0; n < arguments.length; n++) {
        sum1 += arguments[n];
    }
    return sum1;
}
console.log(calcSum(0));
console.log(calcSum(1, 2, 3));
console.log(calcSum(5, 0, 10, 1, 5));


//==================================================
function createPipe(x) {
    return function (y) {
        return y + ' ' + x + ' ' + y;
    };
}

const pipeFunction = createPipe('some text you like');
console.log(pipeFunction);
console.log(pipeFunction('==='));


//=====================================================

const outFnCons = (text1) => {
    console.log(text1);
}
const outFnAl = (text) => {
    alert(text);
}

function ale (a, b, fun1, fun2) {
    const outP = a + b;
    if (outP > 4) {
        fun1(outP);
    } else {
        fun2(outP);
    }
}

ale(8, 1, outFnCons, outFnAl);
ale(2, 1, outFnCons, outFnAl);