import {React,useState} from 'react'
import './Boot.css'

export default function Boot() {
    const[count , setCount]=useState(0);
    const[isRed , setRed]=useState(false);
    const handeleIncrement = ()=> {
      setCount(count + 1);
      setRed(true);
    };
  return (
    <div className='app'>
    <button className='btn1' onClick={handeleIncrement}>Button</button>
    <h1 className='NUMBER'>{count}</h1>
    <h2 className={ isRed ? "Red" : ""}> -------- ID {count} </h2>
    </div>
  
  )
}
