import style from './FoodInput.module.css'

const FoodInput = function({handelOnKeyDown})
{
  return (
    <input type="text"
     placeholder="Search here"
     className={style.FoodInput} 
     onKeyDown={handelOnKeyDown}
     />
  )
}
export default FoodInput;