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


function* g2(){
    yield 1
    yield 2
    yield 3
}


function* g3(){
    yield* g2()
    yield 10
    yield 20
    yield 30
    yield sayHello()
}

function sayHello() {
    console.log('Hi')
    
}

const g3c = g3()
for(let i of g3c){
    if (i === typeof('number')) {
        console.log(i)
        
    }

}