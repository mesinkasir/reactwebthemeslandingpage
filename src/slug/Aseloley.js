import React from "react";
import { Link } from "react-router-dom";
const Aseloley = () => (
  <div className="row">
    <div className="col-12 col-md-12 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Modern Website</strong>
        </h3>
        <p>Include modern website domain dan cloud host.</p>
        <p>
          Bukan sekedar applikasi kasir penjualan online tetapi include dengan
          website plus nama domain usaha dan cloud hosting sebagai symbol dan
          icon bisnis di dunia online sekaligus media promo marketing digital.
        </p>
        <Link to="/website" className="btn btn-light">
          More Info
        </Link>
      </div>
    </div>
  </div>
);

export default Aseloley;
