import React from "react";
import { Helmet } from "react-helmet";
import Mobile from "./demo/Mobile";
import Kasir from "./demo/Kasirdemo";
import Kons from "./slug/Kons";

const Demo = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Begini nih cara menggunakan aplikasi toko</title>
      <meta
        name="description"
        content="Cek video demo mesin kasir online untuk demo aplikasi toko mudah digunakan."
      />
      <meta
        content="Cek video demo mesin kasir online untuk demo aplikasi toko mudah digunakan."
        name=" description"
      />
      <meta
        content="Begini nih cara menggunakan aplikasi toko"
        property="og:title"
      />
      <meta
        content="Cek video demo mesin kasir online untuk demo aplikasi toko mudah digunakan."
        property="og:description"
      />
      <meta
        content="Begini nih cara menggunakan aplikasi toko"
        property="og:title"
      />
      <meta
        content="Cek video demo mesin kasir online untuk demo aplikasi toko mudah digunakan."
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-oolLYoq-j5Q/X93ym6YAD8I/AAAAAAAALus/NZ7SFbMNI543KZaqFx129dX0ST4MBQAQACLcBGAsYHQ/w1200-h630-p-k-no-nu/TOUCHSCREEN3.png"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta
        content="Begini nih cara menggunakan aplikasi toko"
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
        content="Begini nih cara menggunakan aplikasi toko"
        property="og:site_name"
      />
      <meta
        content="Cek video demo mesin kasir online untuk demo aplikasi toko mudah digunakan."
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
        content="Cek video demo mesin kasir online untuk demo aplikasi toko mudah digunakan."
        name="twitter:description"
      />
      <meta
        content="Begini nih cara menggunakan aplikasi toko"
        name="twitter:title"
      />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <Mobile />
    <Kasir />
    <Kons />
  </div>
);

export default Demo;
