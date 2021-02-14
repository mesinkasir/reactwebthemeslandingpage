import React from "react";
import { Helmet } from "react-helmet";
import Phone from "./demo/Phone";
import Admin from "./demo/Admindemo";
import Kons from "./slug/Kons";

const Bioskop = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Keren nya aplikasi restoran ini lihat video nya disini</title>
      <meta
        name="description"
        content="Benar benar mudah dan simle dalam menggunakan mesin kasir online restoran ini cek demo nya disini."
      />
      <meta
        content="Benar benar mudah dan simle dalam menggunakan mesin kasir online restoran ini cek demo nya disini."
        name=" description"
      />
      <meta
        content="Keren nya aplikasi restoran ini lihat video nya disini"
        property="og:title"
      />
      <meta
        content="Benar benar mudah dan simle dalam menggunakan mesin kasir online restoran ini cek demo nya disini."
        property="og:description"
      />
      <meta
        content="Keren nya aplikasi restoran ini lihat video nya disini"
        property="og:title"
      />
      <meta
        content="Benar benar mudah dan simle dalam menggunakan mesin kasir online restoran ini cek demo nya disini."
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-oolLYoq-j5Q/X93ym6YAD8I/AAAAAAAALus/NZ7SFbMNI543KZaqFx129dX0ST4MBQAQACLcBGAsYHQ/w1200-h630-p-k-no-nu/TOUCHSCREEN3.png"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta
        content="Keren nya aplikasi restoran ini lihat video nya disini"
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
        content="Keren nya aplikasi restoran ini lihat video nya disini"
        property="og:site_name"
      />
      <meta
        content="Benar benar mudah dan simle dalam menggunakan mesin kasir online restoran ini cek demo nya disini."
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
        content="Benar benar mudah dan simle dalam menggunakan mesin kasir online restoran ini cek demo nya disini."
        name="twitter:description"
      />
      <meta
        content="Keren nya aplikasi restoran ini lihat video nya disini"
        name="twitter:title"
      />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <Phone />
    <Admin />
    <Kons />
  </div>
);

export default Bioskop;
