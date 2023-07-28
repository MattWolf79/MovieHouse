import {createContext, useContext, useState} from 'react';


const CartContext   = createContext([]);

export const useCartContext=()=>useContext(CartContext);


export const CartProvider =({children})=>{
    const [cart,setCart] = useState([]);

    const addProduct=(item,cantidad) =>{
        const element = cart.find((product) => product.id===item.id);
        if(!element)
        return setCart([...cart,{...item,cantidad,},]);
    const newCart = cart.map((product) => {
        if (product.id===item.id){
            return{...product,cantidad: product.cantidad + cantidad };
        }
        return product;
    });    
    setCart (newCart);
};   

const borrarCart = (id) => {
    const newCart = cart.filter((product)=> product.id !==id)
    setCart(newCart);
}

const limpiarCart = () => setCart([]);

const getCartCant = () => cart.reduce((acc,item)=>acc + item.cantidad,0);

const getTotalPrice = ()=> cart.reduce((acc,item)=> acc + item.price * item.cantidad,0); 

const value={
    cart,
    addProduct,
    getCartCant,
    borrarCart,
    limpiarCart,
    getTotalPrice,
}

    return(
        <CartContext.Provider
            value={value}
            displayName="CartContext"
            >
                {children}
        </CartContext.Provider>
    );
};