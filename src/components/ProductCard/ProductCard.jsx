import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { IconStar } from "../Icons/Icons";
import "./ProductCard.css";

function ProductCard({ product, setPage, setSelectedProduct }) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd(e) {
    e.stopPropagation();
    dispatch({ type: "ADD", product });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="card" onClick={() => { setSelectedProduct(product); setPage("detail"); }}>
      <div className="card-img-wrap">
        <img
          src={`http://localhost:8080/images/${product.image}`}
          alt={product.name}
          className="card-img"
          onError={e => { e.target.src = "http://localhost:8080/images/esquis.jpg"; }}
        />
        <span className="category-badge">{product.category}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div className="card-rating">
          <span className="star-icon"><IconStar /></span>
          <span className="rating-text">{product.rating}</span>
          <span className="stock-text">· {product.stock} en stock</span>
        </div>
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