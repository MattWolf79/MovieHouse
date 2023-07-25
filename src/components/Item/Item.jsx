import "./Item.css";
import { useNavigate } from "react-router-dom";

export const Item = ({
  id,
  title,
  price,
  img,
  category,
  stock
}) => {
  const navigate = useNavigate();
  return (
    
    <div className="item"  onClick={() => navigate(`/item/${id}`)}>
      <div className="item__img">
        <img  src={img} />
      </div>  
      <div className="item__content">
          <div className="item__content-info" >        
              <h4 className="item__content-title">Titulo: </h4>
              <div  className="item-category">{title}</div>   
              <h4 className="item__content-title">Genero: </h4>    
              <div  className="item-category">{category}</div>          
              <div className="item__content-title">Precio: ${price},00</div>
              <div className="item__content-title">Stock:{stock}</div>        
          </div>
      <button className="item-add-button" onClick={()=> addToCart()}> Añadir Carrito</button>  {/*  acá debería agregar al carrito*/}
    </div>
    </div>
  )
}

