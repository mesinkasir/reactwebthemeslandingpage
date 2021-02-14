import React from "react";
import { Helmet } from "react-helmet";
import Kitchen1 from "./slug/Kitchen1";
import Kitchen2 from "./slug/Kitchen2";
import Kitchen3 from "./slug/Kitchen3";

const Resto = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Aplikasi Restoran Cafe Rumah makan</title>
      <meta
        name="description"
        content="Mesin kasir online restoran cafe rumah makan untuk usaha kuliner dengan software program resto ini."
      />
      <meta
        content="Mesin kasir online restoran cafe rumah makan untuk usaha kuliner dengan software program resto ini."
        name=" description"
      />
      <meta content="Aplikasi Restoran Cafe Rumah makan" property="og:title" />
      <meta
        content="Mesin kasir online restoran cafe rumah makan untuk usaha kuliner dengan software program resto ini."
        property="og:description"
      />
      <meta content="Aplikasi Restoran Cafe Rumah makan" property="og:title" />
      <meta
        content="Mesin kasir online restoran cafe rumah makan untuk usaha kuliner dengan software program resto ini."
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-oolLYoq-j5Q/X93ym6YAD8I/AAAAAAAALus/NZ7SFbMNI543KZaqFx129dX0ST4MBQAQACLcBGAsYHQ/w1200-h630-p-k-no-nu/TOUCHSCREEN3.png"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta
        content="Aplikasi Restoran Cafe Rumah makan"
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
        content="Aplikasi Restoran Cafe Rumah makan"
        property="og:site_name"
      />
      <meta
        content="Mesin kasir online restoran cafe rumah makan untuk usaha kuliner dengan software program resto ini."
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
        content="Mesin kasir online restoran cafe rumah makan untuk usaha kuliner dengan software program resto ini."
        name="twitter:description"
      />
      <meta content="Aplikasi Restoran Cafe Rumah makan" name="twitter:title" />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="row lead">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <Kitchen1 />
        <Kitchen2 />
        <Kitchen3 />
      </div>
    </div>
  </div>
);

export default Resto;
