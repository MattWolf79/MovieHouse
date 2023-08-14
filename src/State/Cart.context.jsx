import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const itemInCart = (id) => cart.find((product) => product.id === id);

  const addProduct = (item, cantidad) => {
    const element = itemInCart(item.id);
    if (!element) return setCart([...cart, { ...item, cantidad }]);
    const newCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, cantidad: product.cantidad + cantidad };
      }
      return product;
    });
    setCart(newCart);
  };

  const borrarCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const limpiarCart = () => setCart([]);



  const getCartCant = useMemo(
    () => cart.reduce((acc, item) => acc + item.cantidad, 0),
    [cart]
  );

  const getTotalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.cantidad, 0),
    [cart]
  );

  const value = {
    cart,
    addProduct,
    getCartCant,
    borrarCart,
    limpiarCart,
    getTotalPrice,
    itemInCart,
    // validarFormulario,
  };

  return (
    <CartContext.Provider value={value} displayName="CartContext">
      {children}
    </CartContext.Provider>
  );
};
