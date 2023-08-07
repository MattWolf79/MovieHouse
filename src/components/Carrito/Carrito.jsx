
import "./Carrito.css";
import { useCartContext } from "../../State/Cart.context";
import { useNavigate } from "react-router-dom";

export const Carrito = () => {
  const { getCartCant } = useCartContext();
  const navigate = useNavigate();
  return (
    <div className="cart-widget" onClick={() => navigate("/cart")}>
       {getCartCant ? <span className="bi bi-cart-check">({getCartCant})</span> : null }

           

    </div>
  );
};
