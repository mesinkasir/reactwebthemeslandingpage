import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Kasir from "./Kasir";
import Aplikasitoko from "./Aplikasitoko";
import Demo from "./Demo";
import Layanan from "./Layanan";
import Web from "./Web";
import Cafe from "./Cafe";
import Resto from "./Resto";
import Bioskop from "./Bioskop";
const Main = () => (
  <main className="lead">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/toko" component={Aplikasitoko} />
      <Route exact path="/kasir" component={Kasir} />
      <Route exact path="/video" component={Demo} />
      <Route exact path="/order" component={Layanan} />
      <Route exact path="/website" component={Web} />
      <Route exact path="/resto" component={Resto} />
      <Route exact path="/cafe" component={Cafe} />
      <Route exact path="/bioskop" component={Bioskop} />
    </Switch>
  </main>
);

export default Main;
