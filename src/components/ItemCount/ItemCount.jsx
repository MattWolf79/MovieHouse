import { useState } from "react";
import "./ItemCount.css";
import { NavLink } from "react-router-dom";

export const ItemCount = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleSum = () => {
    setCount(Math.min(stock, count + 1));
  };

  const handleSub = () => {
    setCount(Math.max(1, count - 1));
  };

  return (
    <div className="item-count">
      <div className="item-count__buttons">
        <NavLink to="/">
          <button className="item-add-button">Atrás</button>
        </NavLink>
        <button onClick={() => handleSub()}>-</button>
        <span className="item-add-button">{count}</span>
        <button onClick={() => handleSum()}>+</button>

        <button
          className="item-add-button"
          disabled={!stock}
          onClick={() => {
            onAdd(count);
            setCount(1);
          }}
        >
          Añadir al carrito
        </button>
      </div>
      <NavLink to="/cart">
        <button>Ir al carrito</button>
      </NavLink>
    </div>
  );
};
