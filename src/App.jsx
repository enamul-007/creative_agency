import React, { Component } from 'react'
import Header from "./component/Header/Header"
import Banner from './component/Banner/Banner';
import Service from './component/Service/Service';
import Protfolio from "./component/Protfolio/Protfolio.jsx"
import Member from './component/Team_Member/Member.jsx';



const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Protfolio />
      <Member/>
    </div>
  );
}

export default App