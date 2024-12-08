const objA = {
    chaveA: 'A',
}

const objB = {
    chaveA: 'B',
}

const objC = new Object();
Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)


function Produto(name,price){
    this.name = name
    this.price = price
}


Produto.prototype.discount = function name(percentual) {
    this.price = this.price - (this.price *( percentual/100))
    return this.price
}


Produto.prototype.add = function add(percentual) {
    this.price = this.price + (this.price *( percentual/100))
    return this.price
}

const p1 = new Produto('Banana',28)
const p1add = p1.add(37.5)
console.log(p1add)


const p2 = {
    name: 'mug',
    price: 32
}

Object.setPrototypeOf(p2,Produto.prototype)

const p2add = p2.add(37.5)
console.log(p2add)


const p3 = Object.create(Produto.prototype, {
    price: {
        value: 32
    },
    size: {
        configurable: true
    }
}) // but need the keys 