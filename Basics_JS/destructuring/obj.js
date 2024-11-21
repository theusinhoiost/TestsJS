const pessoa = {
    name:'Matheus',
    age:3231,
    address:{
        road:'boo',
        number:123
    }
}

const {name='No Name',address,address:{road}} = pessoa;

console.log(name,address,road)