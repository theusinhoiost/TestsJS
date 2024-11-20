const num1 = 21.5;

const JustInteger = (num) => {
    return Math.trunc(num)
}

let newNum = Math.floor(num1);  //down
let newNum2 = Math.ceil(num1);  //up
let newNum3 = Math.round(num1);

console.log(`floor = ${newNum}, ceil = ${newNum2} and round = ${newNum3}`);


console.log(` The integer is = ${JustInteger(15.35)}`);

console.log(Math.floor(Math.random() * (100 -10) + 10))