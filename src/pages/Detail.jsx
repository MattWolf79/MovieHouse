import { useEffect, useState } from "react";
import { ItemCount } from "../components/ItemCount/ItemCount";
import { getMovie } from "../movie/ProductMovies.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useCartContext } from "../State/Cart.context";
import { Loader } from "../components/Loader/Loader";

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { addProduct } = useCartContext();

  useEffect(() => {
    getMovie(id).then((res) => {
      if (!res) return navigate("/");
      setIsLoading(false);
      setMovie(res);
    });
  }, [id, navigate]);

  const handleAdd = (cantidad) => {
    addProduct(movie, cantidad);
  };

  if (!Object.keys(movie).length) return;

  return (
      
    <div className="banner">
    {isLoading ? (
        <Loader />
      ) : (
      <div className="item_detail">
        <section>
          <div className="item__img" style={{
                        background: "hsl(261, 29%, 52%);"
                      }}>
            <img src={movie.img} />
          </div>
          <div className="detail__info" style={{
                        background: "hsl(261, 29%, 52%);"
                      }}>
            <span className="detail__info-title">
              <strong>{movie.title} </strong>
            </span>
            <p className="detail__info-description">{movie.description}</p>
            <span className="detail__info-price">
              ${" "}
              {(movie.price || 0).toLocaleString("es-MX", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>

            <ItemCount stock={movie.stock} onAdd={handleAdd} />

            <div>
              <span className="detail__info-stock">
                <strong>¡Quedan solo {movie.stock}!</strong>
              </span>
            </div>
          </div>
        </section>
        
      </div>
    )}
    </div>
  );
};
