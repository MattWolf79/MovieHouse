import { useEffect, useState } from "react";
// import { ItemCount } from "../components";
import { getMovie } from "../movie/ProductMovies.jsx";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(+id).then((res) => {
      setMovie(res); 
    });
  }, [id]);

  if(!Object.keys(movie).length) return

  return (
      <div className="item">
        <div className="item__img">
          <img src={movie.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{movie.title} </span>

          <p className="detail__info-description">{movie.description}</p>

          <span className="detail__info-price">$ {(movie.price || 0).toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}</span>
          <span className="detail__info-stock">¡Quedan solo {movie.stock}!</span>

          {/* <ItemCount stock={movie.stock} onAdd={() => alert("Comprados")} /> */}
        </div>
      </div>

  );
};
