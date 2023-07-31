import "./Item.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Item = ({
  id,
  title,
  price,
  img,
  category,
  stock
}) => {
  
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    
    <div className="item"  onClick={() => navigate(`/item/${id}`)}
    
    onMouseEnter={() => setHovered(true)} 
    onMouseLeave={() => setHovered(false)} 
    >
      <div className="item__img">
        <img  src={img} 
              style={{objectFit:"cover",height: hovered ? "200px" : "100px",}}  
              />
      </div>  
          <div className="item__content-info" >        
              <h4 className="item__content-title">Titulo: </h4>
              <div  className="item-category">{title}</div>   
              <h4 className="item__content-title">Genero: </h4>    
              <div  className="item-category">{category}</div>          
              <div className="item__content-title">Precio: ${price},00</div>
              <span className="item__content-title">Stock:{stock}</span>         
          
          </div>     
     
    </div>  
  )
}

