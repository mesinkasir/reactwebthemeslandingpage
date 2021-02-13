import React from "react";
import { Link } from "react-router-dom";
const Kitchen3 = () => (
  <div>
    <h1>
      <strong>
        <a href="/" className="text-danger">
          Aplikasi Toko
        </a>
      </strong>
    </h1>
    <h3>Dexopos shop apps untuk toko retail shop store dan outlet.</h3>
    <img
      className="img-fluid"
      alt="aplikasi mesin kasir online restoran cafe rumah makan"
      src="https://1.bp.blogspot.com/-4W2N_mgnh-g/Xsa9XWZa8lI/AAAAAAAAJgg/Kd6YOv2cGioyCqGx6p_aBEmoJOfQyY8-gCK4BGAsYHg/new%2Bresto%2Bpos%2Bapp%2B-%2BCopy.jpg"
    />
    <p>
      Maksimalkan dengan tablet pos untuk mencatat pesanan pelanggan dengan
      layar yang lebih besar menjadikan kesempurnaan pada waiters mencatat
      secara detail transaksi dari pelanggan. saat nya upgrade pembukuan dan{" "}
      <a href="/">mesin kasir online restoran cafe rumah makan</a> dengan
      dexopos resto apps version ini.
    </p>
    <div className="text-center">
      <Link to="/cafe" className="btn btn-danger">
        Cek Fitur Aplikasi
      </Link>
    </div>
  </div>
);

export default Kitchen3;
