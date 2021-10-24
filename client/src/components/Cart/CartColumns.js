import React from 'react';

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase" style={{fontSize:"20px"}}>Products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase" style={{fontSize:"20px"}}>Name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase" style={{fontSize:"20px"}}>Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase" style={{fontSize:"20px"}}>Quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase" style={{fontSize:"20px"}}>Remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase" style={{fontSize:"20px"}}>Total</p>
        </div>
      </div>
    </div>
  );
}