import "./Card.css";
import {ProductMovies} from "../movie/ProductMovies.jsx";
import { useState } from "react";
import {Item} from "../Item/Item";
import { movies } from "../../movie/ProductMovies";

export const Card = ({product}) => {

  //Tenemos un estado hovered , este nos va a servir para hacer "zoom" a la foto al pasar el mouse
  const [hovered, setHovered] = useState(false);
  return (
    <div className="items-list"
      onMouseEnter={() => setHovered(true)} //Cuando el mouse se posiciona por encima del elemento cambia el estado a true
      onMouseLeave={() => setHovered(false)} //Cuando sale del elemento cambia el estado a false
    >
      
    {
      ProductMovies.map((movies ) =>  {
           <Item key={movies.id}
           {movies.img}
           {movies.category}
           {movies.title} 
           {movies.price} 
           style={{objectFit:"cover",height: hovered ? "120%" : "100%",}} />
        

      

      
            //  <figure>
            //     <img
            //       className="card"
            //       src={product.img} //Imagen prestada de internet
            //       style={{
            //         objectFit:"cover",
            //         height: hovered ? "120%" : "100%", //Si el estado es true mostrara la imagen algo más grande, si no solo al 100% del alto
            //       }} 
            //       alt="producto"
            //     />
            // </figure>
            //     <div className="card">
            //       <h2>{product.title} </h2>
            //       <p>${product.price}</p>
            //       <button onClick={()=> onAddProduct()}>Añadir al Carrito</button>
            //     </div> 
        
      })}  
</div>
);  
};

