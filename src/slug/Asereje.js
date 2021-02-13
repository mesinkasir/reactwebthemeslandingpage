import React from "react";
import { Link } from "react-router-dom";
const Asereje = () => (
  <div className="row">
    <div className="col-12 col-md-6 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Toko Apps</strong>
        </h3>
        <p>Aplikasi kasir toko shop srtore retail online.</p>
        <p>
          Terbaik untuk kebutuhan mesin kasir online retail shop store dan
          outlet dengan simple dan lengkap system yang digunakan.
        </p>
        <Link to="/toko" className="btn btn-light">
          More Info
        </Link>
      </div>
    </div>
    <div className="col-12 col-md-6 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Resto Apps</strong>
        </h3>
        <p>Aplikasi restoran cafe rumah makan online.</p>
        <p>
          Kemudahan bertransaksi dengan dukungan mobile waiters dalam bekerja
          untuk usaha kuliner.
        </p>
        <Link to="/resto" className="btn btn-light">
          More Info
        </Link>
      </div>
    </div>
  </div>
);

export default Asereje;
