import express from "express";
import ProductManager from "./ProductManager.js";


const app = express();
const PORT = 8080;

app.get("/products", (req, res) => {
    const {limit} = req.query;
    const p = new ProductManager();
    return res.json({productos: p.getProducts});

});

app.get('/products/:pid',(req,res)=>{
    const { pid  }= req.params;
    const p = new ProductManager();
    return res.json(producto = p.getProductsById(Number(pid)));
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});