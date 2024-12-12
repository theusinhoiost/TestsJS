function awaitTime(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject("Need a string");
        setTimeout(() => { resolve(msg.toUpperCase()) },
            time)

    })
}


const promises = ['First value',
    awaitTime('promise1', 1000),
    awaitTime('promise2', 6000),
    awaitTime('promise3', 3000),
    'Other value'
];
 Promise.all(promises).then(value => console.log(value)).catch(e => console.log(e));



Promise.race(promises).then(value => console.log(value)).catch(e => console.log(e));
 
 
function cachePage() {
    const cp = false;
    if (cp) {
        return Promise.resolve('All right')
    } else {
        return Promise.reject('ERROR')
    }

}

cachePage().then(data=>console.log(data)).catch(e=>{console.log(e)})