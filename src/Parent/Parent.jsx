import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {

state={
product:[
{id:1 , productName:"A" , productPrice:1000 , isSale:true},
{id:2 , productName:"B" , productPrice:2000 , isSale:false},
{id:3 , productName:"C" , productPrice:3000 , isSale:true},
{id:4 , productName:"D" , productPrice:40000 , isSale:false},
{id:5 , productName:"E" , productPrice:5000 , isSale:true},
{id:6 , productName:"F" , productPrice:60000 , isSale:false},
{id:7 , productName:"G" , productPrice:7000 , isSale:false},
{id:8 , productName:"H" , productPrice:80000 , isSale:true},
{id:9 , productName:"I" , productPrice:9000 , isSale:false},
{id:10 , productName:"J" , productPrice:10000 , isSale:true},
{id:11 , productName:"K" , productPrice:110000 , isSale:true},
{id:12 , productName:"L" , productPrice:120000 , isSale:true},
]
}
//FUNCTION\\
deleteProduct(productid){
console.log("delete" + productid)
}

//RENDER\\
render() {
    return <>
    <h2>Parent page</h2>
    <div className='container bg-info py-3'>
        <div className='row'>
            {this.state.product.map((element , index)=>{
            return  <Child x={this.deleteProduct} productData={element}/>})}
        
        </div>
    </div>
        
    </>
}
}
