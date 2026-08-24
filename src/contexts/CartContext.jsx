import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage('s11g1', []);
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (orderIndex) => {
    const filteredCart = cart.filter((_, i) => {
      return i !== orderIndex;
    });

    setCart(filteredCart);
  };
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
