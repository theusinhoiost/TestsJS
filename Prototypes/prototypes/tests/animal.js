function Animal(name,gender,sound) {
  this.name = name,
  this.gender = gender,
  this.sound = sound
}

Animal.prototype.whichSound = function (){
    return `${this.name} make this sound: ${this.sound}`
}


function Dog(name,gender,mutt){
  Animal.call(this,name,gender)
  this.mutt = mutt
}


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Animal;
Dog.prototype.whichSound = function (){
  return `${this.name}make this sound: Bark`
}


const dog1 = new Dog('Bull','F',true)
console.log(dog1.whichSound())