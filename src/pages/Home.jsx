import { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner.css';
import {getMovies} from "../movie/ProductMovies"
// import NavBar from '../components/NavBar/NavBar'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getMovies()
    .then(res=> {
      setProducts(res)} //Ademas setea productos con lo que resolvio la promesa (no hay catch porque estamos segurods de que siempre hay algo)
      
      ) 

  }, []);

  // const [allProducts, setAllProducts] = useState([]);
  // const [total,setTotal]=useState(0);
  // const [countProducts,setCountProducts]=useState(0);

  return (
    <div>
      <div className="Banner">
        <ItemListContainer products={products} />
      </div>
    </div>
  );
}

