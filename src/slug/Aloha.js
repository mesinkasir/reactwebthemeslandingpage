import React from "react";
import { Link } from "react-router-dom";
const Aloha = () => (
  <div className="row">
    <div className="row">
      <div className="col-12 col-md-12 p-3 text-center">
        <img
          className="img-fluid"
          alt="laravel point of sale"
          width="200"
          src="https://mesinkasironline.web.app/img/createwebsitelaravel.png"
        />
        <div className="rounded p-3 p-md-5">
          <h1 className="display-2">
            <strong>
              <a href="/" className="text-danger">
                Laravel Point of Sale
              </a>
            </strong>
          </h1>
          <h3>Point of sale cashier with laravel php artisan.</h3>
          <p>
            Mesin kasir online, sebuah aplikasi toko kasir dengan kemampuan
            penjualan grosir dan eceran dalam kebutuhan transaksi dan pembukuan
            usaha. Lava apps memungkinkan kita untuk memudahkan segala nya,
            dengan fitur lengkap dan mudah digunakan desain yang elegan dan
            mewah menjadikan kesempurnaan sebuah web app technology.
          </p>
          <Link to="/toko" className="btn btn-primary border border-white">
            Get Started
          </Link>
          <a
            href="https://mesinkasir.github.io/e-catalog/lavaapp.pdf"
            className="btn btn-danger border border-white"
          >
            Download
          </a>
        </div>
      </div>
      <img
        className="img-fluid"
        width="100%"
        alt="laravel point of sale"
        src="https://1.bp.blogspot.com/-0elLCXw9Zfc/YCXq_0wbpwI/AAAAAAAAJ-8/u90rnoV3UL4fsZFkXf6IKJSNSdh7CMvUACLcBGAsYHQ/s16000/lavas.png"
      />
    </div>
  </div>
);

export default Aloha;
