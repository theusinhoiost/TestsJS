const numbers = [22, 23, 54, 67, 1232, 655, 12, 345, 23]

const people = [
    {
        name: 'Pedro',
        age: 2,
    },
    {
        name: 'Paola',
        age: 21,
    },
    {
        name: 'Paulo',
        age: 24,
    },
    {
        name: 'Mario',
        age: 12,
    },
    {
        name: 'Hamilton',
        age: 28,
    },
]


const final = numbers.reduce(
    (sum, value) => sum += value
)

console.log(final)