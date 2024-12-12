class Person{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;  
    }
    sayHi(){
        console.log(`HI ${this.name}`)
    }

    static isPeople(){
        console.log('YES!!!!')
    }
}

Person.isPeople()
const p1 = new Person('HI','BYE')
/* p1.isPeople() NO WORK */