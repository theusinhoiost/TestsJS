function* generator1(){
    yield 'value 1';
    yield 'value 2';
    yield 'value 3';
}



const g1 = generator1();
/* console.log(g1.next().value);
console.log(g1.next()); */

for (let index  of g1) {
    console.log(index)
    
}

