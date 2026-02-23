import { createContext, useState } from "react";
import data from "../assets/data";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  // 🔥 객체를 배열로 변환
  const flatMenu = [
    ...data.menu.커피,
    ...data.menu.논커피,
  ];

  const [menu, setMenu] = useState(flatMenu);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};