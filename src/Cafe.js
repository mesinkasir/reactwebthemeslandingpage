import React from "react";
import { Helmet } from "react-helmet";
import Pembelian from "./slug/Pembelian";
import Produk from "./slug/Produk";
import Penjualan from "./slug/Penjualan";
import Retur from "./slug/Retur";
import Yok from "./slug/Yok";
import Laporan from "./slug/Laporan";

const Cafe = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Lihat cara penggunaan Aplikasi Restoran</title>
      <meta
        name="description"
        content="Bagaimana sih cara menggunakan mesin kasir restoran online dengan aplikasi resto cafe rumah makan ini."
      />
      <meta
        content="Bagaimana sih cara menggunakan mesin kasir restoran online dengan aplikasi resto cafe rumah makan ini."
        name=" description"
      />
      <meta
        content="Lihat cara penggunaan Aplikasi Restoran"
        property="og:title"
      />
      <meta
        content="Bagaimana sih cara menggunakan mesin kasir restoran online dengan aplikasi resto cafe rumah makan ini."
        property="og:description"
      />
      <meta
        content="Lihat cara penggunaan Aplikasi Restoran"
        property="og:title"
      />
      <meta
        content="Bagaimana sih cara menggunakan mesin kasir restoran online dengan aplikasi resto cafe rumah makan ini."
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-oolLYoq-j5Q/X93ym6YAD8I/AAAAAAAALus/NZ7SFbMNI543KZaqFx129dX0ST4MBQAQACLcBGAsYHQ/w1200-h630-p-k-no-nu/TOUCHSCREEN3.png"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta
        content="Lihat cara penggunaan Aplikasi Restoran"
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
        content="Lihat cara penggunaan Aplikasi Restoran"
        property="og:site_name"
      />
      <meta
        content="Bagaimana sih cara menggunakan mesin kasir restoran online dengan aplikasi resto cafe rumah makan ini."
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
        content="Bagaimana sih cara menggunakan mesin kasir restoran online dengan aplikasi resto cafe rumah makan ini."
        name="twitter:description"
      />
      <meta
        content="Lihat cara penggunaan Aplikasi Restoran"
        name="twitter:title"
      />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <Produk />
        <Pembelian />
        <Penjualan />
        <Retur />
        <Laporan />
        <Yok />
      </div>
    </div>
  </div>
);

export default Cafe;
