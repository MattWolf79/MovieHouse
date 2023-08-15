import "./Banner.css";
import { getMovies } from "../movie/ProductMovies";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";

const Banner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getMovies().then((res) => setProducts(res));
  }, []);

  return (
    <div className="Banner">
      {/* "<! – preparo desarrollo para lo que sigue */}

      <div>
        <ItemListContainer products={products} />
      </div>
    </div>
  );
};
export default Banner;
