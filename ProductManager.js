class ProductManager {
    #products;
    static idProducto = 0;

    constructor() {
        this.#products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock)
            return "Todos los parametros son requeridos ";

        const codeRepetido = this.#products.some(p => p.code == code);
        if (codeRepetido)
            return `Ya se encuentra registrado el codigo ${code} `;

        ProductManager.idProducto = ProductManager.idProducto + 1
        const id = ProductManager.idProducto;
        const nuevoProducto = {
            id: id,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };
        this.#products.push(nuevoProducto);

        return "Producto Agreagado"
    }

    getProducts() {
        return this.#products;
    }

    getProductsById(id) {
        const product = this.#products.find(p => p.id == id);
        if (product)
            return product;
        else
            throw new Error('No existe un producto con ese ID');
    }
}

module.exports = ProductManager;
