const object = {
    a: 5,
    b: { g: 8, y: 9, t: { q: 48 } },
    x: 47

}

const newObject = JSON.parse(JSON.stringify(object));
object.b.t.q = 30;
console.log(newObject);
console.log(object);

//========================================================


const object2 = {
    c: 5,
    d: { g: 8, y: 9, t: { q: 48 } },
    y: 47

}

const objectNew = Object.assign()