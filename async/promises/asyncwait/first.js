function random() {
    return (Math.random() * 1000).toFixed(0)
}

function connection(msg) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            return reject('Fail')
        }
        setTimeout(() => {
            resolve(msg)
        }, random())
    });
}


/* connection('Fase 1')
    .then(value => {
        console.log(value)
        return connection('Fase 2')
    }).then(value => {
        console.log(value)
        return connection('Fase 3')
    }).then(value => console.log(value))
    .catch(e => console.log(e))
 */


async function execute() {
    try {
        const fase1 = await connection('Fase 1');
        console.log(fase1)
        const fase2 =await connection("Fase 2");
        console.log(fase2)
        const fase3 =await connection('Fase 3');
        console.log(fase3)
    } catch (error) {
        throw new Error("WRONG IN");
        
        
    }
    
}

execute()