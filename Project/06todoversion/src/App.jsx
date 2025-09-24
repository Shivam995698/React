import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./InputField";
import Heading from "./Heading";
import Item from "./Itme";
import ToDoitems from "./Todoitems";
import { useState } from "react";
import Welcome from "./Welcome";
const Todos = [];

function App() {
  const [itemVal, setaval] = useState([]);
  const onhandling = (itemName, itemdueDate) => {
    console.log(`itemName ${itemName} itemDate ${itemdueDate}`);

    setaval((currVal)=>{
      const newitem = [
        ...currVal,
        {
          name: itemName,
          Date: itemdueDate,
        },
      ];
      return newitem;
    })
  };
  const onhandlingDelete = (itemName) => {
    const newItem = itemVal.filter(item=>item.name != itemName);
    setaval(newItem);
    // console.log(`item is deleted ${itemName}`);
  };
  return (
    <center className="todo-cotainer">
      <Heading />
      <Input Handleadding={onhandling} />
      {itemVal.length === 0 && <Welcome></Welcome>}
      <ToDoitems todoitems={itemVal} ondelete={onhandlingDelete}></ToDoitems>
    </center>
  );
}

export default App;
