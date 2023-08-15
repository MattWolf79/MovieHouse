import { Item } from "../Item/Item";
import "./ItemListContainer.css";

// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({ products, loading = false }) => {
  return (
    <div className="ItemListContainer">
      {loading ? (
        <>
          <div className="skeleton">
            <div className="skeleton__img"></div>
          </div>
          <div className="skeleton">
            <div className="skeleton__img"></div>
          </div>
          <div className="skeleton">
            <div className="skeleton__img"></div>
          </div>{" "}
        </>
      ) : (
        // eslint-disable-next-line react/prop-types
        products.map((product) => <Item key={product.id} {...product} />)
      )}
    </div>
  );
};
