const people = [
    {id:1, name:'Lucas'},
    {id:2, name:'Afonso'},
    {id:3, name:'Jarry'}
]


const newPeople = new Map()

for(const person of people){
    const {id}= person;
    newPeople.set(id,{...person})
}

console.log(newPeople)