import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./InputField";
import Heading from "./Heading";
import Item from "./Itme";
import ToDoitems from "./Todoitems";
const Todos = [
  {
    "name":'milk',
    "Date":'07/09/2025'
  },{
    "name":'Go to College',
    "Date":'07/09/2025'
  },
  {
    "name":'You have to Suceed',
    "Date":'Till 6 month'
  }
]
function App() {
  return (
    <center className="todo-cotainer">
      <Heading />
      <Input />
      <ToDoitems todoitems={Todos}></ToDoitems>
    </center>
  );
}

export default App;
