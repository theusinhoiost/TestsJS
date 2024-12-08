const item = { name: 'Toothbrush', price: 29 };

const item1 = { ...item, material: 'milk' };

console.log(item);
item1.name = 'cheese';
console.log(item1);

console.log(Object.getOwnPropertyDescriptor(item,'name'))

for (let [key,value] of Object.entries(item)) {
    console.log(key,value)
}

Object.freeze // block modifications