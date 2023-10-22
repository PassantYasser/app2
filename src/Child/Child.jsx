import React, { Component } from 'react'
import './Child.css'

export default class Child extends Component {
render() {
    let{ id, productName ,productPrice ,isSale }=this.props.productData
    return <>
        <div className='col-md-3'>
            <div className='item '>
            <h6>id :  {id}</h6>
            <h6>Name:{productName}</h6>
            <h6 className={productPrice >=10000? ("text-danger"):("text-primary")}>Price:{productPrice}</h6>
            {isSale === true ? (<div className="c1">sale</div>) : ('')}
            <button className='btn btn-primary w-100 ' onClick={()=> this.props.x(id)} >Delete</button>
            </div>
        </div>
    
    
    </>
    
}
}

