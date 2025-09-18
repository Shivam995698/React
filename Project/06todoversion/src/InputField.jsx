import { useState } from "react";
function Input({Handleadding}) {
  const [currDate,setnewDate] = useState("");
  const [currval, setnewVal] = useState("");
  const handleNewDate = (event)=>
  {
    setnewDate(event.target.value);
  }
  const handlenewVal = (event)=>{
    setnewVal(event.target.value);
  }
  const handleButton = ()=>{
    Handleadding(currval,currDate)
    setnewDate("");
    setnewVal("");
  }
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter to do here" value={currval} onChange={handlenewVal} />
        </div>
        <div className="col-4">
          <input type="date"  value={currDate}  onChange={handleNewDate}/>
        </div>
        <div className="col-2">
          <button type="butto " className="btn btn-success kg-button" 
          onClick={handleButton}>
            Success
          </button>
        </div>
      </div>
    </div>
  );
}
export default Input;
