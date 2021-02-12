import React from "react";

import { Link } from "react-router-dom";
const Start3 = () => (
  <div>
    <img
      className="img-fluid"
      alt="aplikasi toko kasir grosir dan eceran"
      src="https://1.bp.blogspot.com/-cnfxf3KPyIw/X0Xg47fEv7I/AAAAAAAALTg/3eBTJtbTGUsBeHKscBt-Me23Ut5o0DG8ACLcBGAsYHQ/s2048/aplikasi%2Bkasir%2Btoko%2Bpenjualan%2Bretail%2Bgorsir%2Bplus%2Bwebsite%2B%25282%2529.jpg"
    />
    <p>
      Mudahkan segala nya dengan lava web apps, membantu dalam mempercepat
      pencatatan pembukuan pekerjaan secara real time online, pelajari bagaimana
      lava web app bekerja dalam menunjang usaha mu.
    </p>
    <div className="text-center">
      <Link to="/kasir" className="btn btn-danger">
        Cek Fitur Aplikasi
      </Link>
    </div>
  </div>
);

export default Start3;
