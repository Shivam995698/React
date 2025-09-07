import Display from "./item";
import styles from "./Fooditem.module.css"
const Fooditem2 =function Fooditem(props)
{
  return (
   //list-group
      <ul className={`${styles["kg-list"]}`}>
       {props.it.map((it2) => (
          <Display key={it2} it3 ={it2}></Display>
        ))}
        </ul>
      );
};
export default Fooditem2;