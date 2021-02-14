import React from "react";
import { Helmet } from "react-helmet";
import Webslug1 from "./slug/Webslug1";
import Variant from "./slug/Variant";
import Laravel from "./slug/Laravel";

const Website = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Pembuatan website</title>
      <meta
        name="description"
        content="Cari pembuatan website app disini aja, banyak pilihan dan desain tema yang keren keren siap pakai murah meriah."
      />
      <meta
        content="Cari pembuatan website app disini aja, banyak pilihan dan desain tema yang keren keren siap pakai murah meriah."
        name=" description"
      />
      <meta content="Pembuatan website" property="og:title" />
      <meta
        content="Cari pembuatan website app disini aja, banyak pilihan dan desain tema yang keren keren siap pakai murah meriah."
        property="og:description"
      />
      <meta content="Pembuatan website" property="og:title" />
      <meta
        content="Cari pembuatan website app disini aja, banyak pilihan dan desain tema yang keren keren siap pakai murah meriah."
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-oolLYoq-j5Q/X93ym6YAD8I/AAAAAAAALus/NZ7SFbMNI543KZaqFx129dX0ST4MBQAQACLcBGAsYHQ/w1200-h630-p-k-no-nu/TOUCHSCREEN3.png"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta content="Pembuatan website" name="facebook:title" />
      <meta content="website" property="og:type" />
      <meta
        content="https://www.facebook.com/mesinkasircomplete"
        property="facebook:author"
      />
      <meta
        content="https://res.cloudinary.com/hockeycorp/image/upload/v1568369085/touchscreen_yonrpa.jpg"
        name="facebook:image"
      />
      <meta content="Pembuatan website" property="og:site_name" />
      <meta
        content="Cari pembuatan website app disini aja, banyak pilihan dan desain tema yang keren keren siap pakai murah meriah."
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
        content="Cari pembuatan website app disini aja, banyak pilihan dan desain tema yang keren keren siap pakai murah meriah."
        name="twitter:description"
      />
      <meta content="Pembuatan website" name="twitter:title" />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <Webslug1 />
    <Variant />
    <Laravel />
  </div>
);

export default Website;
