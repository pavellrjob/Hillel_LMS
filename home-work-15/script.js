
function massege() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}

console.log('Start');
massege().then(() => {
    console.log('I am after 3 seconds');
})

 //========================================================


function trueOrFalse (num) {
    return new Promise ((resolve, reject) => {
        if (num % 2) {
            resolve()
        }
        setTimeout(() => {
            reject(new Error('False number'));
        }, 2000);
    })
}

console.log('Start search....')
trueOrFalse(Math.floor(Math.random() * 10))
    .then(() => {
        console.log('You win!!')
    }).catch(() => {
        console.log('You louse...');
    })

//===============================================================

const delay = milS => {
    return new Promise (resolve => setTimeout (() => resolve(), milS))
}
//  const url = 'https://jsonplaceholder.typicode.com/todos/1'

 async function fetchAsyncTodos() {
    console.log('first call')
    try {
        await delay(4000)
        console.log('second call')
    }catch(e) {
        console.error(e)
    }finally {

    }
 }

 fetchAsyncTodos();