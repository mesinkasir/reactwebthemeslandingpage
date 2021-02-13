import React from "react";
import { Link } from "react-router-dom";

const Sikil = () => (
  <div className="row">
    <div className="col-12 text-center bg-danger p-3">
      <h3 className="text-light">Menu apps</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/" className="text-danger">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/resto" className="text-danger">
              Resto
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/toko" className="text-danger">
              Shop
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/website" className="text-danger">
              Website
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/order" className="text-danger">
              Order
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/contact" className="text-danger">
              Contact
            </Link>
          </li>
        </ol>
      </nav>
    </div>
    <div className="col-12 text-center border-top p-3">
      <small>
        copyrights{" "}
        <a href="https://laravelapp.vercel.app/" className="text-danger">
          laravelapp.vercel.app
        </a>
        <br />
        Present by{" "}
        <a href="https://axcora.com/getaxcoracms" className="text-danger">
          get axcora.
        </a>{" "}
        - demo premium version{" "}
        <a href="https://lavapos.vercel.app/" className="text-danger">
          lavapos.vercel.app
        </a>
      </small>
    </div>
  </div>
);

export default Sikil;
