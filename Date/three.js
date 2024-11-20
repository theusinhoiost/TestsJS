const dateTwo = new Date(2500,0); // min 2 parameters 
/* console.log(dateTwo.toString()) */

let dateThree = new Date(); 

 dateThree = dateThree.getFullYear()
/* console.log(dateThree) */


function yearsAgo(years) {
    const todayDate= new Date()
    return todayDate.getFullYear() - years
}
console.log(yearsAgo(28))