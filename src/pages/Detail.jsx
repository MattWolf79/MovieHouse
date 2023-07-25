import { useEffect, useState } from "react";
// import { ItemCount } from "../components";
import { getMovie } from "../movie/ProductMovies.jsx";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(+id).then((res) => {
      setMovie(res); 
    });
  }, [id]);

  if(!Object.keys(movie).length) {return}

  return (
    <div className="banner">
      <div className="item_detail">
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
               
          <div>
          <span className="detail__info-stock"><strong>¡Quedan solo {movie.stock}!</strong></span>
          </div>
          <NavLink to="/">
            <button className="item-add-button" >Atrás</button>
            </NavLink>
            
          {/* <ItemCount stock={movie.stock} onAdd={() => alert("Comprados")} /> */}
        </div>
        </section>
      </div>
      </div>
  );
};
