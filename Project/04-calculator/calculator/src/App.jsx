
import  styles from "./App.module.css"
import Display from "../Component/Display"
import Button from "../Component/Button"
function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Button></Button>
    </div>
  )
}

export default App
