import './App.scss';
import './Components/header'
import { Header } from './Components/header';
import { MainPhoto } from './Sections/FrontPhoto'
import { About, Awards, Vex } from './Sections/Sections'
import {SectionBanner} from "./Components/SectionBanner";
import VexTitle from './Assets/VexTitle.svg'
import AwardsTitle from './Assets/AwardsTitle.svg'
import React from "react";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainPhoto/>
        <About/>
        <SectionBanner src={AwardsTitle}>
        </SectionBanner>
        <Awards/>
        <SectionBanner src={VexTitle}>
        </SectionBanner>
        <Vex/>
    </div>
  );
}

export default App;
