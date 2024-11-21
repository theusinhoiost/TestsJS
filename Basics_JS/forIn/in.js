const fruits = ['banana','mango','pear','orange','apple','grapefruit']
const person = {
    name:'Mike',
    age:56,
    single:false,
    address:{
        road:'test',
        number:987
    }
}


for (let key in fruits) {
    console.log(fruits[key],key);
}


for(let key in person){
    console.log(key, person[key])
}