import { Component } from "react";

import { Navbar } from "./NAVBAR/Navbar";
import Parent from "./Parent/Parent";
export  default class App extends Component{
    render(){
        return <>
        <Navbar/>
    
        <Parent/>
        </>
        
    }
}