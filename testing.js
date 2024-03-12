const ProductManager = require("./ProductManager")

const producto = new ProductManager();



console.log(producto.getProducts());
//console.log(producto.getProductsById())

console.log(producto.addProducts("Carro", "Chevrolet 01", 5000, "https://imagen.com", "asda23", 4000))
console.log(producto.addProducts("Carro", "Chevrolet 01", 5000, "https://imagen.com", "asda23", 4000))



