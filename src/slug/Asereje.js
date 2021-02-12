import React from "react";
import { Link } from "react-router-dom";
const Asereje = () => (
  <div className="row">
    <div className="col-12 col-md-6 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Kasir Apps</strong>
        </h3>
        <p>Sebuah Aplikasi kasir online.</p>
        <p>
          Dengan installasi online clouds memungkinkan anda bekerja dengan
          berbagai device smartphone android iphone hingga mesin kasir dekstop
          laptop dalam kebutuhan nya.
        </p>
        <Link to="/kasir" className="btn btn-light">
          More Info
        </Link>
      </div>
    </div>
    <div className="col-12 col-md-6 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Modern Website</strong>
        </h3>
        <p>Include modern website untuk usaha.</p>
        <p>
          Include layanan pembuatan website dengan nama domain usaha anda
          sendiri untuk saran promosi dan sekaligus icon usaha di dunia online
          net menyempurnakan web app ini.
        </p>
        <Link to="/website" className="btn btn-light">
          More Info
        </Link>
      </div>
    </div>
  </div>
);

export default Asereje;
