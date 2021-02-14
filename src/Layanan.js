import React from "react";
import { Helmet } from "react-helmet";
import Info from "./slug/Info";
import Standard from "./slug/Standard";
import Premium from "./slug/Premium";
import Basic from "./slug/Basic";
import Price from "./slug/Price";
const Order = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Daftar harga price list mesin kasir online</title>
      <meta
        name="description"
        content="Murah banget aplikasi toko kasir ,aplikasi restoran cafe rumah makan online ini."
      />
      <meta
        content="Murah banget aplikasi toko kasir ,aplikasi restoran cafe rumah makan online ini."
        name=" description"
      />
      <meta
        content="Daftar harga price list mesin kasir online"
        property="og:title"
      />
      <meta
        content="Murah banget aplikasi toko kasir ,aplikasi restoran cafe rumah makan online ini."
        property="og:description"
      />
      <meta
        content="Daftar harga price list mesin kasir online"
        property="og:title"
      />
      <meta
        content="Murah banget aplikasi toko kasir ,aplikasi restoran cafe rumah makan online ini."
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-oolLYoq-j5Q/X93ym6YAD8I/AAAAAAAALus/NZ7SFbMNI543KZaqFx129dX0ST4MBQAQACLcBGAsYHQ/w1200-h630-p-k-no-nu/TOUCHSCREEN3.png"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta
        content="Daftar harga price list mesin kasir online"
        name="facebook:title"
      />
      <meta content="website" property="og:type" />
      <meta
        content="https://www.facebook.com/mesinkasircomplete"
        property="facebook:author"
      />
      <meta
        content="https://res.cloudinary.com/hockeycorp/image/upload/v1568369085/touchscreen_yonrpa.jpg"
        name="facebook:image"
      />
      <meta
        content="Daftar harga price list mesin kasir online"
        property="og:site_name"
      />
      <meta
        content="Murah banget aplikasi toko kasir ,aplikasi restoran cafe rumah makan online ini."
        property="facebook:description"
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta
        content="https://twitter.com/hockeycomp"
        property="twitter:author"
      />
      <meta content="@hockeycomp" name="twitter:site" />
      <meta
        content="https://res.cloudinary.com/hockeycorp/image/upload/v1568369085/touchscreen_yonrpa.jpg"
        name="twitter:image"
      />
      <meta
        content="Murah banget aplikasi toko kasir ,aplikasi restoran cafe rumah makan online ini."
        name="twitter:description"
      />
      <meta
        content="Daftar harga price list mesin kasir online"
        name="twitter:title"
      />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <Price />
      </div>
      <div className="col-12 col-md-4 p-3">
        <div className="p-3 p-md-5 text-center">
          <Basic />
        </div>
      </div>
      <div className="col-12 col-md-4 p-3">
        <div className="p-3 p-md-5 text-center">
          <Premium />
        </div>
      </div>
      <div className="col-12 col-md-4 p-3">
        <div className="p-3 p-md-5 text-center">
          <Standard />
        </div>
      </div>
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className="p-3 p-md-5 border rounded text-center">
          <Info />
        </div>
      </div>
    </div>
  </div>
);

export default Order;
