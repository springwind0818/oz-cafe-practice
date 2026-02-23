import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name}
          <button onClick={() => removeFromCart(index)}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;