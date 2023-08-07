import { useEffect, useState } from "react";
import "../components/Banner/banner.css";
import { getMovies } from "../movie/ProductMovies";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Loader } from "../components/Loader/Loader";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies().then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="banner">
          <ItemListContainer products={products} />
        </div>
      )}
    </div>
  );
};
