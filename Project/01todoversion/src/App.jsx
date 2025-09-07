import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item1 from "./itme1";
import Item2 from "./item2";
import Input from "./InputField";
import Heading from "./Heading";
function App() {
  return (
    <center class="todo-cotainer">
      <Heading />
      <Input />
      <div className="todo-item">
        <Item1 />
        <Item2 />
      </div>
    </center>
  );
}

export default App;
