function Product(name,price) {
    this.name = name
    this.price = price
}

Product.prototype.add = function (percentual) {
    this.price = this.price + (this.price *( percentual/100))
    return this.price
}

Product.prototype.discount = function (percentual) {
    this.price = this.price - (this.price *( percentual/100))////////////////
    return this.price
}
    
function Mug(name,price,material) {
    Product.call(this,name,price)
    this.material = material;
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;
Mug.prototype.add = function (){
   console.log(this.price + 1)///////////////////////  
}

function TShirt (name,price,color){
    Product.call(this,name,price)
    this.color = color
}
TShirt.prototype = Object.create(Product.prototype);
TShirt.prototype.constructor = TShirt;

const c1 = new Mug('BCER',23,'plastic');
c1.add()