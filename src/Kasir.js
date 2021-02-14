import React from "react";
import { Helmet } from "react-helmet";
import Kepala from "./slug/Kepala";
import Login from "./slug/Login";
import Datas from "./slug/Datas";
import Dashboard from "./slug/Dashboard";
import Supplier from "./slug/Supplier";
import Kategori from "./slug/Kategori";
import Yuk from "./slug/Yuk";

const Kasir = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Fitur aplikasi toko software program toko</title>
      <meta
        name="description"
        content="Cara penggunaan mesin kasir online toko fitur dan tutorial pemakaian manual"
      />
      <meta
        content="Cara penggunaan mesin kasir online toko fitur dan tutorial pemakaian manual."
        name=" description"
      />
      <meta
        content="Fitur aplikasi toko software program toko"
        property="og:title"
      />
      <meta
        content="Cara penggunaan mesin kasir online toko fitur dan tutorial pemakaian manual."
        property="og:description"
      />
      <meta
        content="Fitur aplikasi toko software program toko"
        property="og:title"
      />
      <meta
        content="Cara penggunaan mesin kasir online toko fitur dan tutorial pemakaian manual."
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-oolLYoq-j5Q/X93ym6YAD8I/AAAAAAAALus/NZ7SFbMNI543KZaqFx129dX0ST4MBQAQACLcBGAsYHQ/w1200-h630-p-k-no-nu/TOUCHSCREEN3.png"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta
        content="Fitur aplikasi toko software program toko"
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
        content="Fitur aplikasi toko software program toko"
        property="og:site_name"
      />
      <meta
        content="Cara penggunaan mesin kasir online toko fitur dan tutorial pemakaian manual."
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
        content="Cara penggunaan mesin kasir online toko fitur dan tutorial pemakaian manual."
        name="twitter:description"
      />
      <meta
        content="Fitur aplikasi toko software program toko"
        name="twitter:title"
      />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <Kepala />
        <Login />
        <Dashboard />
        <Datas />
        <Supplier />
        <Kategori />
        <Yuk />
      </div>
    </div>
  </div>
);

export default Kasir;
