import {React, useState,useEffect} from 'react';
import'./Home.css';
export default function Home() {
        const[x , setX]=useState(0);
        const[y , setY]=useState(0);
        const localMousePosition =(e)=>{
            setX(e.clientX);
            setY(e.clientY);
        };
        useEffect( ()=>{
            //console.log("useEffect called");
            window.addEventListener("mousemove" ,localMousePosition );              //mousemove ta7rek el mouse\\ 
        },[] );               //[] empty array dependency 3lashan el tkrarrr\\
        
    return (
        <>
    
        <div className='axis '>
                <h1>X-{x}</h1>
                <h1>Y-{y}</h1>
        </div>
        
        </>
    )
}

