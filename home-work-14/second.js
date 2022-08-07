class Plane {
    constructor(name, isFlying) {
        this.userName = name || 'false';
        this.flying = isFlying || 'false';
    }
    
    takeOff() {
        return this.isFlying = 'true';
    }

    land() {
        return this.isFlying = 'false';
    }
    
}

let planes = new Plane('First');




class Airport {
    constructor(planes, plan2) {
        this.planes = planes;
        this.plan2 = plan2;
    }
    getFlyingPlanes(use) {
        for (let value in use) {
            if (use[value] == flying && flying == 'true') {
                return use[value];
            }
        } 
    }
}
let air = new Airport(planes);
air.planes = plan2;
console.log(air.planes);




class PlaneB {
    constructor(Fname, isFflying) {
        this.userFname = Fname || 'false';
        this.fflying = isFflying || 'false';
    }
    
    takeOff() {
        return this.isFflying = 'true';
    }

    land() {
        return this.isFflying = 'false';
    }
    
}

let plan2 = new PlaneB('Killer');
console.log(plan2);

