const fs = require('fs');

class ProductManager {
    #products;
    #path;
    static idProducto = 0;

    constructor() {
        this.#path = "data/productos.json";
        this.#products = this.#obtenerProducosInFile();
    }

    #asignarIdProducto() {
        let id = 1;
        if (this.#products.length != 0)
            id = this.#products[this.#products.length - 1].id + 1;
        return id;

    }

    #obtenerProducosInFile() {
        try {
            if (fs.existsSync(this.#path)) {
                return JSON.parse(fs.readFileSync(this.#path, 'utf-8'));
            } else {
                return [];
            }
        } catch (error) {
            console.log('Ocurrio un error inesperado');
        }
    }

    #guardarArchivo() {
        try {
            fs.writeFileSync(this.#path, JSON.stringify(this.#products));
        } catch (error) {
            console.log('Ocurrio un error inesperado en el guardado');
        }
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock)
            return "Todos los parametros son requeridos ";

        const codeRepetido = this.#products.some(p => p.code == code);
        if (codeRepetido)
            return `Ya se encuentra registrado el codigo ${code} `;

        ProductManager.idProducto = ProductManager.idProducto + 1
        const id = this.#asignarIdProducto();
        
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
        this.#guardarArchivo();

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

    updateProduct(id, objetupdate) {
        let msg = `El producto con ese ${id} no existe`;

        const index = this.#products.findIndex(p => p.id == id);

        if (index !== -1) {
            const { id, ...rest } = objetupdate;
            this.#products[index] = { ...this.#products[index], ...rest };
            this.#guardarArchivo();
            msg = 'Se actualizó el producto correctamente';
        }

        return msg;
    }

    deleteProduct(id) {
        const index = this.#products.findIndex(p => p.id == id);

        let msg = 'Se elimino el producto';
        if (index !== -1) {
            this.#products = this.#products.filter(p => p.id !== id);
            this.#guardarArchivo();
            msg = 'Producto eliminado';
        }

        return msg;
    }
}

module.exports = ProductManager;
