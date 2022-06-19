// Example 1

const arr = ['455', 87.15, true, undefined, 7, null, 'false', [], {} ];

for (let i = 0; i < arr.length; i++) {
   console.log(typeof arr[i]);
   if (typeof arr[i] == "number") {
        arr[i] += 3;
        }
}
console.log(arr);


// Example 2

const num = prompt('Enter an integer', );
const arr2 = [];

function randomNum (num3) {
    return Math.floor(Math.random() * 10);
}

for (let i = 0; i < num; i++) {
    arr2[i] = randomNum (10);
}

console.log(arr2);

// Example 2.2

const num4 = prompt('Enter an integer', );
const arr5 = [];

function randomNum () {
    return Math.floor(Math.random() * 10);
}

for (let i = 0; i < num4; i++) {
    arr5.push(randomNum ());
}

console.log(arr5);

// Example 3
// 3. Создайте объект student1 со свойствами firstName, lastName и mark;

const student1 = {
    a:'firstName',
    b:'lastName',
    c:'mark'
};


// Скопируйте объект student1 в новый объект student2 с помощью spread оператора ( ... ) и измените значение mark;

const student2 = {...student1};
student2.c = 'linda';
console.log(student2);


// Скопируйте объект student1 в новый объект student3 с помощью Object.assign() и измените значение mark;

const student3 = Object.assign(student1);
student3.c = 'Moris';
console.log(student3);


// Посчитайте среднюю оценку по группе (тоесть между 3я новыми объектами)

const group = {
    Piter: 20,
    Vasya: 8,
    Lisa: 14
}
let sum = 0;
let newResalt = 0;
for (let key in group) {
    newResalt += group[key];
    sum += 1;
}
console.log(newResalt / sum);


// Просто получить значения свойства mark у каждого студента через точку или []

// Выведите полученные результаты в консоль.

let newResalt2 = '';
for (let key in group) {
    newResalt2 += `${key + '.'}`;
}
console.log(newResalt2);


// Отобразите все ключи и значения объекта student1 в виде:

let newResalt3 = '';
for (let key in group) {
    newResalt3 = `${key + '-' + group[key]}`;
    console.log(newResalt3);
}
