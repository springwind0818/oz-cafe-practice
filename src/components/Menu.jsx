import { useContext } from "react";
import { MenuContext } from "../context/menuContext";
import { CartContext } from "../context/cartContext";

function Menu() {
  const { menu } = useContext(MenuContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menu-container">
      {menu.map((item) => (
        <div key={item.id} className="menu-card">
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price.toLocaleString()}원</p>
          <button onClick={() => addToCart(item)}>
            장바구니 담기
          </button>
        </div>
      ))}
    </div>
  );
}
export default Menu;