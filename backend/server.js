const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "data", "products.json");

// Leer productos
const readData = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Guardar productos
const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// GET all
app.get("/products", (req, res) => {
  res.json(readData());
});

// GET by id
app.get("/products/:id", (req, res) => {
  const products = readData();
  const product = products.find(p => p.id == req.params.id);
  res.json(product);
});

// POST
app.post("/products", (req, res) => {
  const products = readData();
  const newProduct = {
    id: Date.now(),
    ...req.body
  };
  products.push(newProduct);
  writeData(products);
  res.json(newProduct);
});

// PUT
app.put("/products/:id", (req, res) => {
  let products = readData();
  products = products.map(p =>
    p.id == req.params.id ? { ...p, ...req.body } : p
  );
  writeData(products);
  res.json({ message: "updated" });
});

// DELETE
app.delete("/products/:id", (req, res) => {
  let products = readData();
  products = products.filter(p => p.id != req.params.id);
  writeData(products);
  res.json({ message: "deleted" });
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});