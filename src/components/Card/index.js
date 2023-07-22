import { Detail } from "../../pages/Detail";

export {Card} from "./Card";

export const ItemList = () => {
    return (
      <div className="items-list">
        {storeItems.map((product, idx) => {
          return <Detail key={product.id} {...product} />;
        })}
      </div>
    );
  };