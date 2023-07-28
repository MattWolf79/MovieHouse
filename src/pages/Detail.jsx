import { useEffect, useState } from "react";
import { ItemCount } from "../components/ItemCount/ItemCount";
import { getMovie } from "../movie/ProductMovies.jsx";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCartContext } from "../State/Cart.context";

export const Detail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});

  
  const { addProduct } = useCartContext();

  useEffect(() => {
    getMovie(+id).then((res) => {
      setMovie(res); 
    });
  }, [id]);

  const handleAdd = (cantidad) => {
    addProduct(movie, cantidad);
  };

  if(!Object.keys(movie).length) {return}

  return (
    <div className="banner">
      <div className="item_detail">
      <NavLink to="/">
                  <button className="item-add-button" >Atrás</button>                        
               </NavLink> 
        <section>

        <div className="item__img">
          <img src={movie.img} />
            
        </div>
        <div className="detail__info">
          <span className="detail__info-title" ><strong>{movie.title} </strong></span>
          <p className="detail__info-description">{movie.description}</p>
          <span className="detail__info-price">$ {(movie.price || 0).toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}</span>
               
                      
            <ItemCount stock={movie.stock} onAdd={handleAdd} />
            
          <div>
          <span className="detail__info-stock"><strong>¡Quedan solo {movie.stock}!</strong></span>
          </div>
          
          
            
        </div>
        </section>
      </div>
      </div>
  );
};
