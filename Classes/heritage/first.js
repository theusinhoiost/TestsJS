class People{
    constructor(name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    fullName(){
        return `${this.name} ${this.surname}`
    }
}

class BrazilianPeople extends People{
    constructor(name,surname,age,countryState){
        super(name,surname,age);
        this.countryState = countryState;
    }
}


const p1 = new BrazilianPeople('Aries','Brief',234,'Sao Paulo')
console.log(p1)
console.log(p1.fullName())
