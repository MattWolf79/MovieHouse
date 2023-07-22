import {Item} from "../Item/Item";
import "./ItemListContainer.css";


export const ItemListContainer = ({ products  }) => (
  <div className="ItemListContainer">
    {products.map ((product) => (
      <Item
        key={product.id}
        title={product.title}
        price={product.price}
        img={product.img}
        category={product.category}
      />
    ))}
  </div>
);