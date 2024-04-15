
import { useEffect, useState } from 'react';
import './App.css'
import Usestate from './Usestate';
import Useeffect from './Useeffect';

function App() {
//HOOKS:Hooks in react enable functional to use state and lifr=ecycle features.
//LIFECYCLE:Mount,updating,unmount.
//USEATATE: 'usestate()'bin react that allows you to manage the state in funtional components.
//SYNTAX: import{useState}from "react".
//const[name,setName]=useState("")//const[variable;store the value, function;to update the value.]


const[count,setCount]=useState(0); //'count' is assigned a value but never used.


  return (
    <>
   <h1>REACT HOOKS</h1>
  <Usestate/>
  <Useeffect/>
    </>
  )
}

export default App
