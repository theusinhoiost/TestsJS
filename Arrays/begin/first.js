const array1 = ['B', 'M', 1, 3];
const newArray = array1;
const copyArray = [...array1] // THE REAL ARRAY COPY
newArray.pop();
console.log(array1);
copyArray.push(232, 4545, 54565, 78);

copyArray.forEach(
    (e)=>{
        console.log(e)
    }
)

for (const c of array1) {
    console.log(c)
    
}

const name = "Wallace Troll"
const names = name.split(' ')
console.log(names)


