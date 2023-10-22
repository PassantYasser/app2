import { Component } from "react"
export class About extends Component{

/** STATES */
    state ={
        productName:"Hp",
        productPrice:200000,
        color : "text-primary",
        salePrice:1000
        }
/*----------------------------------------------------------------------------------------------------*/

 /** FUNCTIONS */   
    welcome(name){
        alert("helloooooo " +name);
    }
/*----------------------------------------------------------------------------------------------------*/

/**RENDERS */
    render(){
        return <>
            <h1>about</h1>
            
        <div className="alert alert-danger">
            <p> productname : {this.state.productName} </p>
            <p className={this.state.color}> productPrice : {this.state.productPrice} </p>
            <p className={(this.state.salePrice > 200) ? "text-danger" : "text-primary" } > {this.state.salePrice} </p>
            <button className="btn btn-danger" onClick={ () => {this.welcome("bassant")}} >OK</button>
            </div>

        </>

    }
}