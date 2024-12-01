function createPerson(name,surname, w , h){
return{
    name,
    surname,
    talk(about){return `${name} está falando sobre : ${about}`},
    weight: w,
    height: h,
    weightOneHundred(){
        if (this.weight >= 100) {
          console.log('Yes')  
        }
        else{
            console.log('No')
        }
    }
}

}

const p1 = createPerson("Matheus","Mango", 89,45)
console.log(p1)

const answer = p1.talk("I've been in Europe");

console.log(answer);
p1.weightOneHundred()