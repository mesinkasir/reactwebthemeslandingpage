import React from "react";
import { Link } from "react-router-dom";
const Kons = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className="p-3 p-md-5 border text-center">
          <h3>Order Now</h3>
          <p>
            Segera update dan upgrade pembukuan anda dengan aplikasi kasir toko
            grosir eceran retail include website modern untuk usaha anda.
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
