import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import PRODUCTS, { CATEGORIES } from "../../data/products";
import "./Catalog.css";

function Catalog({ setPage, setSelectedProduct }) {
  const [category, setCategory] = useState("todos");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  let filtered = PRODUCTS.filter(p => {
    const matchCat = category === "todos" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="catalog-wrap">
      <div className="catalog-header">
        <h1 className="page-title">Catálogo</h1>
        <p className="page-subtitle">
          {filtered.length} producto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

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

      <div className="cat-tabs">
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => setCategory(c)}
            className={`cat-tab ${category === c ? "cat-tab-active" : ""}`}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

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