import  Home  from "./HOME/Home";
import Navbar from "./NAVBAR/Navbar";
import React from 'react'
import Parent from "./Parent/Parent";
import Blog from "./BLOG/Blog";
import Boot from "./BOOOT/Boot";

export default function App() {

  return (<>
    <Navbar/>
    <Home/>
    <Parent/>
    </>
  )
}
