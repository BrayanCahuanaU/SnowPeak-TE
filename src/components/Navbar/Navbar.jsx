import { useCart } from "../../context/CartContext";
import { IconCart, IconSnow } from "../Icons/Icons";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ page, setPage }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // evita micro movimientos
      if (Math.abs(currentScroll - lastScroll) < 10) return;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false); // bajando
      } else {
        setShow(true); // subiendo
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`nav ${show ? "nav-show" : "nav-hide"}`}>
      <div className="nav-inner">
        <button onClick={() => setPage("home")} className="logo">
          <span className="logo-icon">
            <IconSnow />
          </span>
          <span className="logo-text">SnowPeak</span>
          <span className="logo-sub">STORE</span>
        </button>

        <div className="nav-links">
          {[["home", "Inicio"], ["catalog", "Catálogo"]].map(([p, l]) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`nav-link ${page === p ? "nav-link-active" : ""}`}
            >
              {l}
            </button>
          ))}
        </div>

        <button onClick={() => setPage("cart")} className="cart-btn">
          <IconCart />
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;