import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../movie/ProductMovies.jsx";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const Category = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setProducts([]);
        getMovies(id) 
      .then(res => {
        setIsLoading(false); 
        setProducts(res)} 
        
        ) 
    }, [id]);
  
  
    return (
      <div>
        <div className="container">
          <h5>{isLoading ? "Cargando ..." : ""}</h5>
          <ItemListContainer products={products} />
        </div>
      </div>
    );

}