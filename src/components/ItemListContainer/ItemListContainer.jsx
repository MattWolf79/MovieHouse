import {Item} from "../Item/Item";
import "./ItemListContainer.css";


export const ItemListContainer = ({ products  }) => {
  
  return (
  <div className="ItemListContainer">
    {products.map ((product) => {
      return <Item key={product.id} {...product}
      />
      })}
  </div>
  );
};