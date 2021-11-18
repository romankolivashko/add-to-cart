import React from 'react';
import { useCart} from "react-use-cart";

const Cart = () => {
  const { items } = useCart();
  return (
    <div>
        {console.warn(items)}
    </div>
  );
};

export default Cart;