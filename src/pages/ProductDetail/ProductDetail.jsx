import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { IconArrowLeft, IconMinus, IconPlus, IconStar } from "../../components/Icons/Icons";
import "./ProductDetail.css";

function ProductDetail({ product, setPage }) {
  const { cart, dispatch } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const inCart = cart.find(i => i.id === product.id);

  function handleAdd() {
    for (let i = 0; i < qty; i++) dispatch({ type: "ADD", product });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="detail-wrap">
      <button onClick={() => setPage("catalog")} className="back-btn">
        <IconArrowLeft /> Volver al catálogo
      </button>
      <div className="detail-grid">
        <div className="detail-img-wrap">
          <img
            src={product.image}
            alt={product.name}
            className="detail-img"
            onError={e => { e.target.src = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80"; }}
          />
        </div>
        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-title">{product.name}</h1>
          <div className="detail-rating">
            <span className="star-icon"><IconStar /></span>
            <span style={{ fontWeight: 500 }}>{product.rating}</span>
            <span className="stock-text" style={{ marginLeft: 8 }}>
              {product.stock} unidades disponibles
            </span>
          </div>
          <p className="detail-price">S/ {product.price.toLocaleString()}</p>
          <p className="detail-desc">{product.description}</p>
          <div className="qty-row">
            <span className="qty-label">Cantidad:</span>
            <div className="qty-control">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="qty-btn">
                <IconMinus />
              </button>
              <span className="qty-num">{qty}</span>
              <button onClick={() => setQty(q => Math.min(product.stock, q + 1))} className="qty-btn">
                <IconPlus />
              </button>
            </div>
          </div>
          <button onClick={handleAdd} className={`detail-add-btn ${added ? "add-btn-done" : ""}`}>
            {added
              ? `✓ ${qty > 1 ? qty + "x " : ""}Añadido al carrito`
              : `Agregar al carrito · S/ ${(product.price * qty).toLocaleString()}`}
          </button>
          {inCart && (
            <p className="in-cart-hint">
              Ya tienes {inCart.qty} en el carrito.{" "}
              <button onClick={() => setPage("cart")} className="link-btn">
                Ver carrito →
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;