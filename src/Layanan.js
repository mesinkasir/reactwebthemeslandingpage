import React from "react";
import Info from "./slug/Info";
import Standard from "./slug/Standard";
import Premium from "./slug/Premium";
import Basic from "./slug/Basic";
import Price from "./slug/Price";
const Order = () => (
  <div className="row">
    <div className="col-12 col-md-12 p-3 p-md-5">
      <Price />
    </div>
    <div className="col-12 col-md-4 p-3">
      <div className="p-3 p-md-5 text-center">
        <Basic />
      </div>
    </div>
    <div className="col-12 col-md-4 p-3">
      <div className="p-3 p-md-5 text-center">
        <Premium />
      </div>
    </div>
    <div className="col-12 col-md-4 p-3">
      <div className="p-3 p-md-5 text-center">
        <Standard />
      </div>
    </div>
    <div className="col-12 col-md-12 p-3 p-md-5">
      <div className="p-3 p-md-5 border rounded text-center">
        <Info />
      </div>
    </div>
  </div>
);

export default Order;
