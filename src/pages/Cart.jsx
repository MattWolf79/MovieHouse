import {  useState } from "react";
// import "./Cart.css";
import { useCartContext } from "../State/Cart.context";
import { NavLink } from "react-router-dom";


export const Cart = () => {
  const { cart, limpiarCart, getTotalPrice, borrarCart } =
    useCartContext();
  const [active, setActive] = useState(false);
 
  return (

      
      <div className="container-icon" >  
      <div className="container-cart-icon" onClick={() => setActive(!active)}>
      </div> 
        {cart.length ? (
          <>  
              {cart.map((Item) => (        
                <ul className="cart-product" key={Item.id}  style={{background: '#eae4e4'}} >
                  <img src={Item.img} className="item__img_cart"   />
                    <h2 className="titulo-producto-carrito">{Item.title}</h2>
                    <h3 className="precio-producto-carrito">${Item.price}</h3>   
                    <h4 className="count-products"> Cantidad
                    <span style={{padding: "10px",margin: "10px 0" }}>{Item.cantidad}</span>
                    </h4>
                    
                  <button className="bi bi-trash3"
                      style={{
                        padding: "10px",
                        background: "orange",
                        margin: "10px 0",
                      }}
                      key={Item.id}
                      onClick={() => borrarCart(Item.id)}
                  alt="Quitar del carrito"> 
                  </button>
                </ul>
              ))}

            <div className="cart-total" style={{
                        background: "orange"
                      }} >
              <h3>Total a pagar: ${" "} {getTotalPrice.toLocaleString("es-CO", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}</h3>
      <button className="btn-clear-all"  onClick={limpiarCart} >Vaciar Carrito</button>  
      <NavLink to="/compra">    
      <button >Comprar ahora</button>
      </NavLink>
    
            </div>          
          </>
        ) : (
          <div className="banner">
          <p className='banner-container' style={{background:"grey", width:"auto"}} >El carrito está vacío</p>
          </div>
       
        )}
      
    </div>
  );
};
