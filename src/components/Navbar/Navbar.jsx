import { useCart } from "../../context/CartContext";
import { IconCart, IconSnow } from "../Icons/Icons";
import "./Navbar.css";

function Navbar({ page, setPage }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button onClick={() => setPage("home")} className="logo">
          <span className="logo-icon"><IconSnow /></span>
          <span className="logo-text">SnowPeak</span>
          <span className="logo-sub">STORE</span>
        </button>
        <div className="nav-links">
          {[["home", "Inicio"], ["catalog", "Catálogo"]].map(([p, l]) => (
            <button key={p} onClick={() => setPage(p)}
              className={`nav-link ${page === p ? "nav-link-active" : ""}`}>
              {l}
            </button>
          ))}
        </div>
        <button onClick={() => setPage("cart")} className="cart-btn">
          <IconCart />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;