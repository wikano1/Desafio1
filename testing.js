const ProductManager = require("./ProductManager")

const producto = new ProductManager();

console.log(producto.addProduct("Carro", "Chevrolet 01", 5000, "https://imagen.com", "asda23", 4000))
console.log(producto.addProduct("moto", "honda 01", 3000, "https://imagen.com", "rrr4", 1000))

console.log(producto.getProducts())

