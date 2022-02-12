import { useState } from "react";
import style from "./dropdown.module.css";

export default function Dropdown() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("цвет");
  const colors = ["Желтий", "Красний", "Зелений"];
  return (
    <div className={style.dropdown}>
      <div
        className={style.dropdownBtn}
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected}
        <span></span>
      </div>
      {isActive && (
        <div className={style.dropdownContent}>
          {colors.map((color) => (
            <div
              onClick={(e) => {
                setSelected(color);
                setIsActive(false);
              }}
              className={style.dropdownItem}
            >
              {color}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
