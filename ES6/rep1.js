class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product ${this.name}`);
        console.log(`Product ${this.price}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new product("Shirt", 19.99);
const product2 = new product("Skirt", 49.99);

const salesTax = 0.05;
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total}`);
