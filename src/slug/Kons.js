import React from "react";
import { Link } from "react-router-dom";
const Kons = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className="p-3 p-md-5 border text-center">
          <h3>Order Now</h3>
          <p>
            Dan kini saat nya menggunakan layanan laravel app untuk masa depan
            terbaik bagi usaha dan bisnis.
          </p>
          <Link to="/order" className="btn btn-danger">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Kons;
