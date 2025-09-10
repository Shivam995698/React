//conditional rendering
// if(fooditem.length==0)
// {
//   return <>
//   <h2>i am still hungary</h2>;
//   </>
// }
// {/* {fooditem.length==0 ? <h3>i am still hungary</h3>:null} */}

//before destructing the use state 
  // const val1 = arr[0];
  // let setvall = arr[1];

  // let fooditem = ["Dahi", "roti", "salad", "ghee", "green vegetable"];
   // console.log(event.target.value);
    {/* <p>{val1}</p> */}

         {/* <Container>
    <p>Above list of food items are heathy and good for your health </p>
  </Container> */}
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./ErrorMessage";
import Fooditem2 from "./fooditem";
import Container from "./Container";
import FoodInput from "./FoodInput";
import { useState } from "react";

function App() {
  let [fooditem, setfooditem] = useState([]);
  let [val1, setvall] = useState("Food item will be displayed ");

  console.log(`text to show ${val1}`);
  const handlekeydown = function (event) {
   
    if (event.key === "Enter") {
      let newVal = event.target.value;
      let newarr = [...fooditem, newVal];
      setfooditem(newarr);
    }
    setvall(event.target.value);
  };
  return (
    <>
      <Container>
        <h1>Healthy Food item </h1>
        <FoodInput handelOnKeyDown={handlekeydown}></FoodInput>
    
        <Fooditem2 it={fooditem}></Fooditem2>
        <ErrorMessage it4={fooditem}></ErrorMessage>
      </Container>
    </>
  );
}
export default App;
