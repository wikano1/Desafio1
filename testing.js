const ProductManager = require("./ProductManager")

const producto = new ProductManager();

console.log(producto.addProduct("Carro", "Chevrolet 01", 5000, "https://imagen.com", "asda23", 4000))
console.log(producto.addProduct("moto", "honda 01", 3000, "https://imagen.com", "rrr4", 1000))

//console.log(producto.getProducts())
//console.log(producto.getProductsById(1))

//console.log(producto.deleteProduct(3))

const productoActualizar ={
    "id": 2,
    "title": "perro",
    "description": "honda 01",
    "price": 100,
    "thumbnail": "https://imagen.com",
    "code": "rrr4",
    "stock": 90
}

console.log(producto.updateProduct(2, productoActualizar))