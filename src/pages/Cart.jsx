import { useEffect, useState } from "react";
import { useCartContext } from "../State/Cart.context";
// import { Item } from "../components/Item/Item";

export const Cart = () => {
  const { cart, limpiarCart, getTotalPrice, borrarCart, getCartCant } =
    useCartContext();
  const [active, setActive] = useState(false);
  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  return (
    <div className="container-icon">
      
      <div>
            <button className="btn-clear-all" onClick={limpiarCart}>
              Vaciar Carrito
            </button>
      </div>     
      <div className="container-cart-icon" onClick={() => setActive(!active)}>
      </div> 
      <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
        {cart.length ? (
          <>
            <div className="row-product">
              {cart.map((Item) => (                
                
                <div className="cart-product" key={Item.id}>
                  
                  <h2  className="item__img_cart">
                  <img src={Item.img} />
                  </h2>
                    <h2 className="titulo-producto-carrito">{Item.title}</h2>
                    <h3 className="precio-producto-carrito">${Item.price}</h3>
                    
                  
                  <div className="count-products"> Cantidad
                    <span style={{
                        padding: "10px",  
                        background: "white",
                        margin: "10px 0", 
                      }}>{Item.cantidad}</span>
                  </div>
                  <button
                      style={{
                        padding: "10px",  
                        background: "grey",
                        margin: "10px 0",
                      }}
                      key={Item.id}
                      onClick={() => borrarCart(Item.id)}
                  > Quitar del carrito
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>Total:</h3>
              <span className="total-pagar">
                ${" "}
                {getTotalPrice().toLocaleString("es-CO", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>

           
          </>
        ) : (
          <p className="cart-empty">El carrito está vacío</p>
        )}
      </div>
    </div>
  );
};
