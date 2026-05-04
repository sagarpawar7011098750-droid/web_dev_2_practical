import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  function next() {
    if (index + 4 < products.length) {
      setIndex(index + 4);
    }
  }

  function prev() {
    if (index - 4 >= 0) {
      setIndex(index - 4);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>

      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {products.slice(index, index + 4).map((p) => (
          <img key={p.id} src={p.thumbnail} width="150" alt="" />
        ))}
      </div>
    </div>
  );
}
