import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => (
  <div>
    <Header />
    <div className="container-fluid">
      <Main />
    </div>
    <Footer />
  </div>
);

export default App;
