
import { useContext } from "react";
import Item from "./Itme";
import style from "./Todoitems.module.css"
import { ToDoContext } from "../Store/todo-item-store";
const ToDoitems = function({todoitems,ondelete})
{
  const ondelete1 = function(itemName)
  {
    ondelete(itemName);
  }
  const toDoitemFromContext = useContext(ToDoContext)
  return <>
      <div className={style.TodoItem}>
        {toDoitemFromContext.map((item,index)=>(
            <Item key={index} itemname={item.name} itemDate={item.Date}  ondelete ={ondelete1}/>
        ))}
      </div>
  </>

}
export default ToDoitems;