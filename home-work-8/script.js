let triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,


    setValues: function prompt(a, b, c) {
        return {aSide: this.aSide = a, bSide: this.bSide = b, cSide: this.cSide = c};
    },

    getPerimeter: function perimeter() {
        return (this.aSide) + (this.bSide) + (this.cSide) ;
        
        
    },
    

    isEqualSides: function() {
        if ((this.aSide) === (this.bSide) && (this.bSide) === (this.cSide)) {
            return true;
        }else{
            return false;
        }
    }


}

console.log(triangle.setValues(20, 20, 20));
console.log(triangle.getPerimeter());
console.log(triangle.isEqualSides());

//=====================================================================================


const s = prompt('Enter first number', );
const d = prompt('Enter second number', );

let calculator = {
    x: 0,
    y: 0,

    read: function prom(m, n) {
        return {x: this.x = parseInt(m), y: this.y = parseInt(n)};
    },

    sum: function sumTwo () {
        return (this.x) + (this.y);
    },

    multi: function multiTwo () {
        return (this.x) * (this.y);
    },

    diff: function diffTwo () {
        if(this.x > this.y) {
            return (this.x) - (this.y);
        }else{
            return (this.y) - (this.x);
        }
    },
    
}

console.log(calculator.read(s, d));
console.log(calculator.sum());
console.log(calculator.multi());
console.log(calculator.diff());

//================================================================================

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format (start, and) {
    if (!start && !and) {
        console.log(this.name);
    }else{
        console.log(start + this.name + and);
    }
    
    
}

format.call(country);
format.apply(country, ['[', ']']);
format.call(country.capital);
format.apply(country.capital);
format.apply(true);

//==================================================

var text = 'outside';
function logIt () {
    console.log(text);
    var text = 'inside';
};
logIt();//inside (объявлена глобальная переменная. При переименовании внутри функции значения сохраняются и за ее пределами)