const axios = require('axios')

/* axios.get('https://jsonplaceholder.typicode.com/posts').then(
    result => result.data
).then(result=> {
    for (const element of result) {
        console.log(`ID ELEMENT: ${element.id} - TITLE: ${element.title}`)
        
    }
})
 */



axios.get('https://jsonplaceholder.typicode.com/posts').then(
    result => result.data
).then(result=> {
  result.forEach((element,index) => {
    console.log(element.title
)
    
  });
})
