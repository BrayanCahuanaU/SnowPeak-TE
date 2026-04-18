import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { IconStar } from "../Icons/Icons";
import "./ProductCard.css";

function ProductCard({ product, setPage, setSelectedProduct }) {
  // Accede al dispatch del carrito global
  const { dispatch } = useCart();
  // Estado para mostrar confirmación al agregar al carrito
  const [added, setAdded] = useState(false);

  // Agrega el producto al carrito y muestra confirmación temporal
  function handleAdd(e) {
    e.stopPropagation(); // Evita que el click abra el detalle del producto
    dispatch({ type: "ADD", product });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // Resetea el estado después de 1.5s
  }

  return (
    // Al hacer click en la tarjeta navega al detalle del producto
    <div className="card" onClick={() => { setSelectedProduct(product); setPage("detail"); }}>

      {/* Imagen del producto con badge de categoría */}
      <div className="card-img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="card-img"
          // Si la imagen falla carga una imagen de respaldo
          onError={e => { e.target.src = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80"; }}
        />
        <span className="category-badge">{product.category}</span>
      </div>

      {/* Información del producto */}
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>

        {/* Rating con estrella y stock disponible */}
        <div className="card-rating">
          <span className="star-icon"><IconStar /></span>
          <span className="rating-text">{product.rating}</span>
          <span className="stock-text">· {product.stock} en stock</span>
        </div>

        {/* Precio y botón agregar al carrito */}
        <div className="card-footer">
          <span className="price">S/ {product.price.toLocaleString()}</span>
          <button onClick={handleAdd} className={`add-btn ${added ? "add-btn-done" : ""}`}>
            {added ? "✓ Añadido" : "+ Carrito"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;