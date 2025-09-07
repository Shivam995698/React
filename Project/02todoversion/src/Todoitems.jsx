
import Item from "./Itme";
import style from "./Todoitems.module.css"
const ToDoitems = function({todoitems})
{
  return <>
      <div className={style.TodoItem}>
        {todoitems.map((item,index)=>(
            <Item key={index} itemname={item.name} itemDate={item.Date} />
        ))}
      </div>
  </>

}
export default ToDoitems;