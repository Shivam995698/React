import styles from "./Button.module.css";
function Button({onButtonClick}) {
  const ButtonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonCointainer}>
      {ButtonName.map((item, index) => (
        <button key={index} className={styles.button} onClick={()=>onButtonClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}
export default Button;
