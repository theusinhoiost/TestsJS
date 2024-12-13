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


/* connection('Path 1')
    .then(value => {
        console.log(value)
        return connection('Path 2')
    }).then(value => {
        console.log(value)
        return connection('Path 3')
    }).then(value => console.log(value))
    .catch(e => console.log(e))
 */


async function execute() {
    try {
        const path1 = await connection('path 1');
        console.log(path1)
        const path2 =await connection("path 2");
        console.log(path2)
        const path3 =await connection('path 3');
        console.log(path3)
    } catch (error) {
        throw new Error("WRONG IN");
        
        
    }
    
}

execute()