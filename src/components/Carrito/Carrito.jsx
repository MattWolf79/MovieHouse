import { useState } from "react";
import "./Carrito.css";

const Carrito = () => {
  const [active, setActive] = useState(false);
  return (
    // <div className={`container-cart-products hidden-cart ${active ? '' : 'hidden-cart'}`}
    <div className="Carrito" onClick={()=> setActive(!active)}>
      <i className="bi bi-minecart"></i>
    </div>
  )
}

export default Carrito
