import ProductCard from "../../components/ProductCard/ProductCard";
import PRODUCTS, { CATEGORIES } from "../../data/products";
import "./Home.css";

function Home({ setPage, setSelectedProduct }) {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <div className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Temporada 2026 · Andes del Sur</p>
          <h1 className="hero-title">
            Equípate para<br />conquistar la nieve
          </h1>
          <p className="hero-sub">
            Equipamiento profesional de ski y snowboard seleccionado por expertos.
            Desde esquís de carrera hasta ropa técnica de última generación.
          </p>
          <button onClick={() => setPage("catalog")} className="btn-primary">
            Ver catálogo completo
          </button>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className="benefits">
        <div className="benefit">
          <h3>Envíos rápidos</h3>
          <p>Recibe tu equipo en tiempo récord en todo el país.</p>
        </div>
        <div className="benefit">
          <h3>Calidad garantizada</h3>
          <p>Productos seleccionados de marcas profesionales.</p>
        </div>
        <div className="benefit">
          <h3>Soporte experto</h3>
          <p>Asesoramiento para elegir el equipo ideal.</p>
        </div>
      </div>

      {/* DESTACADOS */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Destacados</h2>
          <button onClick={() => setPage("catalog")} className="see-all">
            Ver todos →
          </button>
        </div>

        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              setPage={setPage}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* BANNER PROMO */}
      <div className="promo">
        <div className="promo-content">
          <h2>Prepárate para la temporada</h2>
          <p>Descubre lo último en equipamiento técnico 2026</p>
          <button onClick={() => setPage("catalog")} className="btn-secondary">
            Comprar ahora
          </button>
        </div>
      </div>

      {/* CATEGORÍAS */}
      <div className="category-section">
        <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
          Explora por categoría
        </h2>

        <div className="cat-grid">
          {CATEGORIES.filter((c) => c !== "todos").map((cat) => (
            <button
              key={cat}
              onClick={() => setPage("catalog")}
              className="cat-chip"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;