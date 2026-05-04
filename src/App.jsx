import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(d => setData(d.products));
  }, []);

  const next = () => i + 4 < data.length && setI(i + 4);
  const prev = () => i - 4 >= 0 && setI(i - 4);

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>

      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 20 }}>
        {data.slice(i, i + 4).map(p => (
          <img key={p.id} src={p.thumbnail} width="150" alt="" />
        ))}
      </div>
    </div>
  );
}