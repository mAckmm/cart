import React, { Component, Fragment } from "react";
import Product from "./Product";

class LoadingProducts extends Component {
  render() {
    return (
      <Fragment>
      <div className="products loading">
      <h3>groceries</h3>
     
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      
    </Fragment>
    );
  }
}

export default LoadingProducts;
