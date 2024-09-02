import React, { Component } from "react";
import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
import Service from "./component/Service/Service";
import Protfolio from "./component/Protfolio/Protfolio.jsx";
import Member from "./component/Team_Member/Member.jsx";
import Customer from "./component/Customer_part/Customer.jsx";
import News from "./component/News_part/News.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Protfolio />
      <Member />
      <Customer />
      <News />
    </div>
  );
};

export default App;
