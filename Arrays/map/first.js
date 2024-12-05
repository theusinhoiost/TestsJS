const numbers = [22, 23, 54, 67, 1232, 655, 12, 345, 23]

const double = numbers.map(
    num => num * 10
)

console.log(double);

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

const peopleTwo = people.map(
(e,index) => {console.log(`${e.name} ///// id: ${index * 10}`)
console.log({age:e.age})

}
)