import React from "react";
import { Link } from "react-router-dom";

const Info = () => (
  <div>
    <h3>Contact Us</h3>
    <p>
      Hubungi kami jika membutuhkan konsultasi dan bantuan, atau konfirmasi
      order anda.
    </p>
    <Link to="/contact" className="btn btn-danger">
      Contact Us
    </Link>
  </div>
);

export default Info;
