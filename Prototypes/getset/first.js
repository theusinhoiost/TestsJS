function Item(name, price, stock) {
    this.name = name;
    this.price = price;
    Object.defineProperty(this,'stock',{
        enumerable:true,
        configurable:false,
        get: function(){
            return stock
        },
        set: function(value){
            if (typeof value !== 'number') {
                throw new TypeError('Value is ZERO');               
            }
            stock = value
            
        }
    });

}

const p1 = new Item('Soap',3 ,28);

console.log(p1.stock)
p1.stock = 300;
console.log(p1.stock)

