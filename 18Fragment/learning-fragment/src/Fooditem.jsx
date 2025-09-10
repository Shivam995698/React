//list-group

import Display from "./Item";
import styles from "./Fooditem.module.css";
import { useState } from "react";
const Fooditem2 = function Fooditem(props) {
  let [activeitem,setActiveitem] = useState([]);
  let onbuttonhandle = function(event,item)
  {
    let newitem = [...activeitem,item];
    setActiveitem(newitem);
  }
  return (
    <ul className={`${styles["kg-list"]} list-group`}>
      {props.it.map((it2) => (
        <Display
          key={it2}
          it3={it2}
          bought={activeitem.includes(it2)}
          handleInput={() => {
            console.log(`${it2} is add to cart`);
          }}
          handleBuyButton ={(event)=>onbuttonhandle(event,it2)}
        ></Display>
      ))}
    </ul>
  );
};
export default Fooditem2;
