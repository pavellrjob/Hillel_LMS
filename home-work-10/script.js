let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
      setTimeout(() => console.log(this.message), 3000);
    },
 }

 coffeeMachine.start();


 let teaPlease = {
    message: 'Wanna some tea instead of coffee?'
 }

 coffeeMachine.start.call(teaPlease);

//======================================================



// function concatStr (a, b, c) {
//     console.log(`${a}` + `${b}` + `${c}`);
// }

// concatStr(prompt('greeting', ), prompt('point', ), prompt('Name', ));

const hel = {
    name: 'Ivan',
    point: ' ',
    greeting: 'Hallo',
    cons: function () {
        return this.name + this.point + this.greeting;
    }
}

hel.cons();

const hallo = {
    name: 'Vasya',
    point: ' ',
    greeting: 'Hallo',
}

let newName = hel.cons.bind(hallo);
newName();

// function concatStr (a, b, c) {
//     console.log(`${a}` + `${b}` + `${c}`);
// }

// let checkConcat = concatStr('hallo', ' ', 'Petro');

//=======================================================================



function showNumber(min, max, time) {
    let timerId = setInterval(() => console.log(min++), time);
    if (timerId < max) {
        return min++;
    }else{
        setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
    }
}

showNumber(5, 10, 1000);



//========================================================


function addBase(base) {
    return function (num) {
      return base + num;
    };
  }
  let addOne = addBase(1);
  alert(addOne(5) + addOne(3));// Мы передали в функцию addBase значение 1 и замкнули его. Теперь передавая в addOne пераметр 5 мы передаем этот пераметр num и происходит прибавление (5+1) и тоже самое с addOne(3) => происходит сумирование (3+1). Отсюда((5+1)+(3+1))=10 
