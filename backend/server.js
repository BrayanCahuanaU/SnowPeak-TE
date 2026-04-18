const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "..", "products.json");

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
app.get("/api/products", (req, res) => {
  res.json(readData());
});

// GET by id
app.get("/api/products/:id", (req, res) => {
  const products = readData();
  const product = products.find(p => p.id == req.params.id);
  res.json(product);
});

// POST
app.post("/api/products", (req, res) => {
  res.status(403).json({ message: "Read-only API for demo" });
});

// PUT
app.put("/api/products/:id", (req, res) => {
  res.status(403).json({ message: "Read-only API for demo" });
});

// DELETE
app.delete("/api/products/:id", (req, res) => {
  res.status(403).json({ message: "Read-only API for demo" });
});

module.exports = app;