
import Item from "./Itme";
import style from "./Todoitems.module.css"
const ToDoitems = function({todoitems,ondelete})
{
  const ondelete1 = function(itemName)
  {
    ondelete(itemName);
  }
  return <>
      <div className={style.TodoItem}>
        {todoitems.map((item,index)=>(
            <Item key={index} itemname={item.name} itemDate={item.Date}  ondelete ={ondelete1}/>
        ))}
      </div>
  </>

}
export default ToDoitems;