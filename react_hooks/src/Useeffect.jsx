import React, { useEffect, useState } from 'react'

function Useeffect() {
    //Useeffect:'useEffect()' is a react: hook to perform the side effect in functional component.
    //Syntax:useEffect(()=>{})

const[count,setCount]=useState(0);
useEffect(()=>{
    setTimeout(()=>{
        setCount((prev)=>prev+1);
    },1000);
},[]); //[]emptry array dependency:It renders only once.



  return (
    <div>
      <h1>USEEFFECT:</h1>
      <h2>COUNTER VALUE:{count}</h2>
    </div>
  )
}

export default Useeffect
