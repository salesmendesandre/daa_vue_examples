import express from "express";
const app = express();
app.use(express.json());

const productos = [
    { id: 1, nombre: "Teclado", precio: 20 },
    { id: 2, nombre: "Ratón", precio: 10 },
    ];

// Listado de productos
app.get("/productos", (req, res) => {
    res.json(productos);
});

// Detalle de producto por id
app.get("/productos/:id", (req, res) => {
    const producto = productos.find((p) => p.id == req.params.id);
    if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(producto);
});

// Crear producto
app.post("/productos", (req, res) => {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
        return res.status(400).json({ error: "Nombre y precio son obligatorios" });
    }
    const nuevo = { id: Date.now(), nombre, precio };
    productos.push(nuevo);
    res.status(201).json({ message: "Producto creado", data: nuevo });
});

// Actualizar completamente
app.put("/productos/:id", (req, res) => {
    const idx = productos.findIndex((p) => p.id == req.params.id);
    if (idx === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
        return res.status(400).json({ error: "Nombre y precio son obligatorios" });
    }
    productos[idx] = { id: productos[idx].id, nombre, precio };
    res.json({ message: "Producto actualizado", data: productos[idx] });
});

// Eliminación
app.delete("/productos/:id", (req, res) => {
    const idx = productos.findIndex((p) => p.id == req.params.id);
    if (idx === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    productos.splice(idx, 1);
    res.status(204).send();
}); 

app.listen(4000, () => {
    console.log("API escuchando en http://localhost:4000");
});
