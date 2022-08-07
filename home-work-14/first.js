class Student {
    constructor (firstName, lastName, averageScore) {
        this.name = firstName;
        this.lName = lastName;
        this.score = averageScore;
    }

    getFullName() {
        return this;
    }
    
    isGrantHolder() {
        if (this.score >= 4) {
            return 'true';
        }else{
            return 'false';
        }
    }
}

let allName = new Student ('Pavel', 'Ryzhkov', 4.8);
console.log (allName.getFullName());

console.log (allName.isGrantHolder());


class Aspirant extends Student {
    constructor (dissertationTopic, isDissertationComplete) {
        super();
        this.topic = dissertationTopic;
        this.complete = isDissertationComplete;
    }

    isGrantHolder() {
        if (this.score == 4.8 && this.complete == 'true') {
            return 'true';
        }else{
            return 'false';
        }
    }
}

let aspirant = new Aspirant(4, 'true');
console.log(aspirant.isGrantHolder());

for (let value in aspirant) {
    console.log(value);
}