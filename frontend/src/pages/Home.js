
import React, { useState, useEffect, Fragment } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword")?.trim() || "";

  useEffect(() => {
    // If keyword is empty but URL still has ?keyword=, remove it cleanly
    if (!keyword && searchParams.has("keyword")) {
      setSearchParams({}, { replace: true });
      return; // avoid double-fetch
    }

    const url = `${process.env.REACT_APP_API_URL}/products${
      keyword ? `?keyword=${encodeURIComponent(keyword)}` : ""
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((err) => console.error("Fetch error:", err));
  }, [keyword, searchParams, setSearchParams]);

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}
