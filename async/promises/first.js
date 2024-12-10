function random() {
    return (Math.random() * 10000).toFixed(0)
}

function connection(msg, time) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve(msg)
        }, time)
    });
}


connection('1',random()).then((value)=> {console.log(value)
    return connection('Last',random()).then((value)=>{console.log(value)})
})


