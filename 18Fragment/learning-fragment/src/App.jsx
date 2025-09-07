//conditional rendering 
  // if(fooditem.length==0)
  // {
  //   return <>
  //   <h2>i am still hungary</h2>;
  //   </>
  // }
  // {/* {fooditem.length==0 ? <h3>i am still hungary</h3>:null} */}

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./ErrorMessage";
import Fooditem2 from "./fooditem";
function App() {
  let fooditem =["Dahi", "roti", "salad", "ghee", "green vegetable"];
  // let fooditem =[]
  return (
    <>
      <Fooditem2 it={fooditem}></Fooditem2>
      <ErrorMessage it4={fooditem}></ErrorMessage>
    </>
  );
}
export default App;
