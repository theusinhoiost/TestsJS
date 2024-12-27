function Item(name, price, stock) {
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        value: stock,
        writable: false,
        configurable: false,
    });
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: false,

        },
        price: {
            enumerable: true,
            value: price,
            writable: false,
            configurable: false,
        },
    })
}

const p1 = new Item('Soap', 3, 28);

console.log(p1)
p1.name = 'Scarf'
console.log(p1)
p1.price = 234