const _velocity = Symbol()
class Car {
    constructor(name) {
        this.name = name
        this[_velocity] = 0
    }
   
    set accelerate(value){
        if (typeof value !== ('number')) return;
        if (value > 100 || value<=0) return;
        this[_velocity] = value
    }

    get accelerate(){
        return this[_velocity];
    }
}


const c1 = new Car('Fusca');
c1.accelerate = 23
console.log(c1.accelerate)