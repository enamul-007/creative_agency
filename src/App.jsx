import React, { Component } from 'react'
import Header from "./component/Header/Header"
import Banner from './component/Banner/Banner';
import Service from './component/Service/Service';
import Protfolio from "./component/Protfolio/Protfolio.jsx"


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Protfolio />
    </div>
  );
}

export default App