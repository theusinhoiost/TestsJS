function Person(name,surname) {
    this.name = name;
    this.surname = surname;
    
}
Person.prototype.sayFullName = function () {
    return `${this.name} ${this.surname}`
}


const p1 = new Person('Fm','Am')

console.dir(p1)



const date = new Date()

console.dir(date)