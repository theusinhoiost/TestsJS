const pessoa1 = new Object();
pessoa1.name = 'Tesy';
pessoa1.age = 29;
pessoa1.spellName= function(){
    return(`${this.name} is talking`)
}
pessoa1.getBorn = function () {
    const year = new Date();
   return year.getFullYear() - this.age;
    
}

console.log(pessoa1.getBorn())
console.log(pessoa1)