const framework = ['AngularJS', 'jQuery'];
framework.unshift('Backbone.js');
framework.push('ReactJS', 'Vue.js');
framework.splice(1, 0, 'CommonJS');

const newFt = 0;
function search (a) {
    let newFr = framework.filter((num) => num != a);
    console.log(newFr);
        
}

search('jQuery');


//=======================================================


function removeNegativeElements (b) {
    let newArg = b.filter((num3) => num3 >= 0 || typeof num3 === 'string'); 
    return newArg;
}

let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value']);
console.log(result);


//========================================================


let arr = [1, true, 42, 'red', 64, 'green', 'web', -898, false];

function getStringElements(a) {
    let result2 = a.filter((num2) => typeof num2 === 'string');
    return result2;
}

getStringElements(arr);


//=====================================================


let newS = 0;
let newSu = 0;
const someArray = [...Array(10)];
    const newAr = someArray.map(el => {
    return Math.floor(Math.random() * 10);
    })
    console.log(newAr);
function recursionSumNumb (v, deep = 0) {
    if (v.length <= 1) {
        return v;
    }
    if (deep < v.length) {
        newS += v[deep];
        recursionSumNumb (v, ++deep);
        
    }
}
recursionSumNumb(newAr);
console.log(newS);

//============================================


const arr3 = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];
let arrNew3 = newArr3(arr3);


function newArr3 (arr, deep = 0) {
    if (!arr.length) {
        return deep;
    }
    const arrNew2 = arr.shift();
    if (arrNew2 === 10) {
        deep += arrNew2;
    }
    return newArr3(arr, deep);
}


console.log(arrNew3);


//=====================================================


const arr4 = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];
let newArray2 = [];
const fin = search(arr4);

function search(array, deep = 0) {
    if (!array.length) {
        return deep;
    }
    const newArray = array.shift();
    if (newArray > 5) {
        newArray2[deep] = newArray;
        
    }
    return search(array, ++deep);
}

console.log(newArray2);