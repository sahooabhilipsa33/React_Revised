import React, { useState } from 'react'

function Usestate() {

     //HOOKS:  Hooks in react enable functional components to use state and lifestyle features.
    //LIFECYCLE: Mount,Updating,Unmount.
  
    //USESTATE:  usestate() in react that allows you to manage the state in functional components.
  
    //SYNTAX:  import{useState}from "react".
    //const [name,setName] = useState("")  --> const [variable: store the value, function: to update the value
    const [count, setCount] = useState(0); 

    function increseValue() {
        setCount((prev) => prev + 1);
    }
    function decreaseValue(){
        setCount((prev) => prev -1);
    }
    function show(){
      alert(`Your value is: ${count}`);
    }
    function addValue(){
      const value=prompt("Please enter your value:");
      setCount(value);
    }

  return (
    <div>
     <h1> USESTATE:</h1>
        <h2>COUNT: {count}</h2>
        <button onClick={increseValue}>ADD</button>
        <button onClick={decreaseValue}>REDUCE</button>
        <button onClick={show}>SHOW</button>
        <button onClick={addValue}>ADD VALUE</button>
    </div>
  )
}

export default Usestate