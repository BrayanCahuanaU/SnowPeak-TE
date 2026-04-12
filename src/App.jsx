import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <CartProvider>
      <div className="app-wrap">
        <Navbar page={page} setPage={setPage} />
        <main className="main">
          {page === "home" && (
            <Home setPage={setPage} setSelectedProduct={setSelectedProduct} />
          )}
          {page === "catalog" && (
            <Catalog setPage={setPage} setSelectedProduct={setSelectedProduct} />
          )}
          {page === "detail" && selectedProduct && (
            <ProductDetail product={selectedProduct} setPage={setPage} />
          )}
          {page === "cart" && (
            <Cart setPage={setPage} />
          )}
        </main>
        <footer className="footer">
          <p>© 2026 SnowPeak Store · Equipamiento profesional de ski · Arequipa, Perú</p>
        </footer>
      </div>
    </CartProvider>
  );
}