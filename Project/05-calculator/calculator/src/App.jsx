
import  styles from "./App.module.css"
import Display from "../Component/Display"
import Button from "../Component/Button"
import { useState } from "react"
function App() {
  const [currVal,setVal]=useState("");
  const byClicking = function(buttonText){
    // console.log(buttonText);
    if(buttonText == 'C')
    {
      setVal("");
    }
    else if(buttonText=='=')
    {
      const newVal = eval(currVal);
      setVal(newVal);
    }
    else{
      const newVal = currVal+buttonText;
      setVal(newVal);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayvalue= {currVal}></Display>
      <Button onButtonClick={byClicking}></Button>
    </div>
  )
}

export default App
