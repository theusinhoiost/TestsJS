class Person{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;  
    }
    sayHi(){
        console.log(`HI ${this.name}`)
    }
}


const p1 = new Person('Lemon','Mango')
console.warn(p1)
p1.sayHi()

