const num = [12, 23, 43, 8, 7, 67, 4, 3, 54, 67];
const num2 = num.filter(
    value => value < 10 
    
)
console.log(num2)



const people = [
    {name:'Pedro',
        age: 2,
    },
    {name:'Paola',
        age: 21,
    },
    {name:'Paulo',
        age: 24,
    },
    {name:'Mario',
        age: 12,
    },
    {name:'Hamilton',
        age: 28,
    },
]

const peopleAge = people.filter(
(result,index,array) => {
    if (result.age < 18 ) {
        console.log(`${result.name} not adult and id ${index}`)  
    }
    else{
        console.log(array)
    }
}
)

const nameTest = 'Jobert'

console.log(nameTest.length)