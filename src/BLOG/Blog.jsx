
import React from 'react';

export default function Blog() {
  return (
    <div className='row'>
    <div className='col-md-3'>
    <div className="card" >
      <img src={require("../Images/images (2).jpg")} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Lyly</h5>
        <p className="card-text">
        </p>
        <a href=" " className="btn btn-primary">
          Share
        </a>
      </div>
    </div>
    </div>
    <div className='col-md-3'>
    <div className="card" >
      <img src={require("../Images/fata.jpg")} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Flafy</h5>
        <p className="card-text">
        </p>
        <a href=" " className="btn btn-primary">
          Share
        </a>
      </div>
    </div>
    </div>
    <div className='col-md-3'>
    <div className="card" >
      <img src={require("../Images/images (1).jpg")} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Kity</h5>
        <p className="card-text">
        </p>
        <a href=" " className="btn btn-primary">
          Share
        </a>
      </div>
    </div>
    </div>
    <div className='col-md-3'>
    <div className="card" >
      <img src={require("../Images/cat-internationa.jpg")} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Kito</h5>
        <p className="card-text">
        </p>
        <a href=" " className="btn btn-primary">
          Share
        </a>
      </div>
    </div>
    </div>




  </div>
  );
}
