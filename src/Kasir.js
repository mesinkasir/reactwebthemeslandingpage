import React from "react";
import Kepala from "./slug/Kepala";
import Login from "./slug/Login";
import Datas from "./slug/Datas";
import Dashboard from "./slug/Dashboard";
import Supplier from "./slug/Supplier";
import Kategori from "./slug/Kategori";
import Pembelian from "./slug/Pembelian";
import Produk from "./slug/Produk";
import Penjualan from "./slug/Penjualan";
import Retur from "./slug/Retur";
import Yuk from "./slug/Yuk";
import Laporan from "./slug/Laporan";

const Kasir = () => (
  <div className="row">
    <div className="col-12 col-md-12 p-3 p-md-5">
      <Kepala />
      <Login />
      <Dashboard />
      <Datas />
      <Supplier />
      <Kategori />
      <Produk />
      <Pembelian />
      <Penjualan />
      <Retur />
      <Laporan />
      <Yuk />
    </div>
  </div>
);

export default Kasir;
