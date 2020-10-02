import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoStateless from './Components/DemoStateless';
import DemoStateFul from './Components/DemoStateFul';
import BaiTapLayout1 from './Components/BaiTapLayoutComponent/BaiTapLayout1';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemocondistionalAndState from './Components/DemoLogin/DemocondistionalAndState';
import BaiTapChonMauXe from './BaiTapChonMauXe';
import DemoListAndKey from "./ListAndKeys/demoListAndKey";
import DemoProps from './Props/DemoProps';

function App() {
  return (
    <div className="App">
      {/* <DemoStateless />
      <DemoStateFul/> */}
      {/* <BaiTapLayout1/> */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}
      {/* <DemocondistionalAndState/> */}
      {/* <BaiTapChonMauXe/> */}
      {/* <DemoListAndKey /> */}
      <DemoProps/>
    </div>
  );
}

export default App;
