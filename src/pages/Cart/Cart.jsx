import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { IconTrash, IconMinus, IconPlus } from "../../components/Icons/Icons";
import "./Cart.css";

function Cart({ setPage }) {
  const { cart, dispatch } = useCart();
  const [ordered, setOrdered] = useState(false);

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 500 ? 0 : 35;
  const total = subtotal + shipping;

  if (ordered) return (
    <div className="empty-cart">
      <div className="empty-icon">🎿</div>
      <h2 className="empty-title">¡Pedido confirmado!</h2>
      <p className="empty-sub">Tu pedido ha sido registrado.</p>
      <button
        onClick={() => { dispatch({ type: "CLEAR" }); setOrdered(false); setPage("catalog"); }}
        className="btn-primary">
        Seguir comprando
      </button>
    </div>
  );

  if (cart.length === 0) return (
    <div className="empty-cart">
      <div className="empty-icon">🛒</div>
      <h2 className="empty-title">Tu carrito está vacío</h2>
      <p className="empty-sub">Agrega productos desde el catálogo para comenzar.</p>
      <button onClick={() => setPage("catalog")} className="btn-primary">
        Ir al catálogo
      </button>
    </div>
  );

  return (
    <div className="cart-wrap">
      <h1 className="page-title">Carrito de compras</h1>
      <div className="cart-grid">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-img"
                onError={e => { e.target.src = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80"; }}
              />
              <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-cat">{item.category}</p>
                <p className="cart-item-price">S/ {item.price.toLocaleString()} c/u</p>
              </div>
              <div className="cart-item-controls">
                <div className="qty-control">
                  <button
                    onClick={() => dispatch({ type: "UPDATE_QTY", id: item.id, qty: item.qty - 1 })}
                    className="qty-btn">
                    <IconMinus />
                  </button>
                  <span className="qty-num">{item.qty}</span>
                  <button
                    onClick={() => dispatch({ type: "UPDATE_QTY", id: item.id, qty: item.qty + 1 })}
                    className="qty-btn">
                    <IconPlus />
                  </button>
                </div>
                <p className="cart-item-subtotal">S/ {(item.price * item.qty).toLocaleString()}</p>
                <button
                  onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                  className="remove-btn">
                  <IconTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3 className="summary-title">Resumen del pedido</h3>
          <div className="summary-row">
            <span>Subtotal ({cart.reduce((s, i) => s + i.qty, 0)} items)</span>
            <span>S/ {subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Envío</span>
            <span className={shipping === 0 ? "free-shipping" : ""}>
              {shipping === 0 ? "Gratis" : `S/ ${shipping}`}
            </span>
          </div>
          {shipping > 0 && (
            <p className="shipping-hint">Envío gratis en compras mayores a S/ 500</p>
          )}
          <div className="summary-divider" />
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>S/ {total.toLocaleString()}</span>
          </div>
          <button onClick={() => setOrdered(true)} className="checkout-btn">
            Finalizar compra
          </button>
          <button onClick={() => setPage("catalog")} className="continue-btn">
            ← Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;