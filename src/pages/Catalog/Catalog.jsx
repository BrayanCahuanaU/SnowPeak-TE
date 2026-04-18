import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Catalog.css";

const CATEGORIES = ["todos", "esquís", "botas", "cascos", "gafas", "ropa", "bastones", "guantes"];

function Catalog({ setPage, setSelectedProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("todos");
  // Estado para el texto de búsqueda
  const [search, setSearch] = useState("");
  // Estado para el criterio de ordenamiento
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    fetch('http://127.0.0.1:3000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="catalog-wrap">Cargando productos...</div>;
  }

  let filtered = products.filter(p => {
    const matchCat = category === "todos" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Ordena los productos según el criterio seleccionado
  if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="catalog-wrap">

      {/* Encabezado con título y contador de resultados */}
      <div className="catalog-header">
        <h1 className="page-title">Catálogo</h1>
        <p className="page-subtitle">
          {filtered.length} producto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Barra de búsqueda y selector de ordenamiento */}
      <div className="filters-row">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="select">
          <option value="default">Ordenar por</option>
          <option value="price-asc">Precio: menor a mayor</option>
          <option value="price-desc">Precio: mayor a menor</option>
          <option value="rating">Mejor valorados</option>
        </select>
      </div>

      {/* Pestañas de filtro por categoría */}
      <div className="cat-tabs">
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => setCategory(c)}
            className={`cat-tab ${category === c ? "cat-tab-active" : ""}`}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      {/* Grilla de productos o mensaje vacío */}
      {filtered.length === 0
        ? <div className="empty">No se encontraron productos con esos filtros.</div>
        : <div className="product-grid">
            {filtered.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                setPage={setPage}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </div>
      }
    </div>
  );
}

export default Catalog;