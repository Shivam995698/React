import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { useRef } from "react";
function Input({Handleadding}) {

  // const NumberUpdate = useRef(0);
  const toDoElement = useRef();
  const toDoDate= useRef();
  const handleButton = (event)=>{
    event.preventDefault();
    const currval = toDoElement.current.value;
    const currDate = toDoDate.current.value;
    toDoElement.current.value="";
    toDoDate.current.value = "";
    Handleadding(currval,currDate)
  }
  return (
    <div className="container">    
      <form className="row kg-row" onSubmit={handleButton}>
        
        <div className="col-6">
          <input type="text" placeholder="Enter to do here" ref={toDoElement} />
        </div>
        <div className="col-4">
          <input type="date"  
          ref={toDoDate}/>
        </div>
        <div className="col-2">
          <button type="butto " className="btn btn-success kg-button" 
          >
            <MdLibraryAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Input;
