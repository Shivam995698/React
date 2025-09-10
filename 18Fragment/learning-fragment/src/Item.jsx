// const handlebyButtonClick = function(it3,event){
//   console.log(event);
//   console.log(`${it3} is added`);
// }
import Styles from "./Fooditem.module.css";
function Display({ it3, bought, handleInput, handleBuyButton }) {
  return (
    <>
      <li className={`list-group-item ${bought ? "active" : ""}`}>
        {it3}
        <button
          className={`${Styles.button} btn btn-info `}
          onClick={(event) => {
            handleInput(event); // pehle ye chalega
            handleBuyButton(event); // phir ye chalega
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default Display;
