import React from "react";
import Pembelian from "./slug/Pembelian";
import Produk from "./slug/Produk";
import Penjualan from "./slug/Penjualan";
import Retur from "./slug/Retur";
import Yok from "./slug/Yok";
import Laporan from "./slug/Laporan";

const Cafe = () => (
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
);

export default Cafe;
