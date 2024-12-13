function randomTimer(){
    return(Math.random() * 10000).toFixed(0)
}



function awaitSeconds(msg){
    return new Promise((resolve,reject)=>{
        if (typeof msg !== 'string'){
            return reject("Not is a string")
        } 
            setTimeout(()=> {
            resolve(msg)
            },randomTimer())
    })
}

async function test() {
 try {
       const t1 = await awaitSeconds('test 3')
       console.log(t1)
       const t2 = await awaitSeconds('test 2')
       console.log(t2)
       if (t2==='test 3') {
           Promise.reject('Error TEST TEST')
       }
       const t3 = await awaitSeconds('test 3')
       console.log(t3)
       console.log(outsidePromise)
 } catch (error) {
    throw new Error('ERROR IN CODE')
 }
    
    
}

test()/* .catch(e=>console.log(e)) */


const outsidePromise = awaitSeconds('outside Promise')
console.log(test)