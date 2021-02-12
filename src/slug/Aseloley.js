import React from "react";
import { Link } from "react-router-dom";
const Aseloley = () => (
  <div className="row">
    <div className="col-12 col-md-12 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Lava Web Apps</strong>
        </h3>
        <p>All in one website dan aplikasi dengan lava apps.</p>
        <p>
          Nikmati bertransaksi dan cek pembukuan secara online dimana saja dan
          kapan saja , include dengan website untuk media marketing digital
          online , all in one pencatatan pembukuan dan mempercepat transaksi via
          aplikasi kasir toko online dan website sebagai icon usaha di net.
        </p>
        <Link to="/contact" className="btn btn-light">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

export default Aseloley;
