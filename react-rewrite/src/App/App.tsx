import './App.scss';
import './Components/header'
import { Header } from './Components/header';
import { MainPhoto } from './Sections/FrontPhoto'
import {SectionBanner} from "./Components/SectionBanner";
import VexTitle from './Assets/VexTitle.svg'
import RobotsTitle from './Assets/Robots Header.svg'
import AwardsTitle from './Assets/AwardsTitle.svg'
import React from "react";
import {InfoBox} from "./Components/InfoBox";
import {Award} from './Components/AwardComponent'
import FinalistAward from './Assets/Photos/FinalistAward.png'
import DesignAward from './Assets/Photos/DesignAward.png'
import CommunityAward from './Assets/Photos/CommunityAward.png'
import {Gallery} from './Components/Gallery'
import {Robot} from "./Components/Robot";

import TeamBPhoto from './Assets/Photos/4067B.png';
import TeamAPhoto from './Assets/Photos/4067A.png';
import TeamX1Photo from './Assets/Photos/4067X1.png';
import TeamX2Photo from './Assets/Photos/4067X2.png';
import TeamHMRScorpion from './Assets/Photos/HMRScorpion.png';

function App() {
  return (
    <div className="App">
        <Header/>
        <MainPhoto/>
        <div className="circuit-background">
            <div className="circuit-background-blur">
            <section id="AboutSection">
                <InfoBox content={["Burnside Robotics Club is a team of students attending Burnside High School that love to build robots. We have competed in multiple national Vex Robotics competitions and have qualified for the world competition. Our members are enthusiastic in the areas of STEM (Science, Technology, Engineering, and Maths) and enjoy competing with their creations.", "Burnside robotics offers a range of vital skills such as engineering, programming, teamwork, task management, and much more. These skills help students understand the world around them and help them build up skills in a safe, fun environment. "]} titles={["ABOUT US", "WHAT WE OFFER"]}/>
                <Gallery images={[]}></Gallery>
            </section>
            <SectionBanner src={AwardsTitle}>
            </SectionBanner>
            <section style={{paddingTop: "3%"}} id="AwardsSection">
                <Award src={FinalistAward} side={0} name="Tournament Finalists 2020"/>
                <Award src={DesignAward} side={1} name="Design Award 2021 "/>
                <Award src={CommunityAward} side={2} name="Community Award 2019 "/>
            </section>
            <SectionBanner src={VexTitle}>
            </SectionBanner>
            <section id="VexSection">
                <InfoBox content={["Vex Robotics is the fast growing robotics competition in the world. It contains three divisions: Vex EDR, Vex IQ, and Vex U. Burnside Robotics compete in the Vex EDR division which is for Intermediate and High School students. This year we are planning to compete in Vex IQ as we have enough teams to be able to explore that field. Vex has an annual game for each of its division and these games are introduced in April and are competed in February. This allows competitors to always be kept on their toes and helps them to think of solutions in different ways. This means students need to design, build and program a robot for each new challenge."]} titles={["WHAT IS VEX?"]}/>
                <InfoBox content={["VRC V5 is a robotics system designed for years  9-13. It mostly uses metal construction parts with electric motors and a brain. Incredibly versatile, the competition still has limits to how big the robot can be and how many motors and other components we use. This makes the challenge harder as we have to think of solutions within these limits.", "The VEX IQ system includes plastic, snap-together pieces designed specifically for the dexterity for young hands. Students can easily build their first robot, and the wide variety of additional parts means that students can build a robot that is bigger, stronger, and more functional as students continue to learn."]} titles={["VRC", "IQ"]}/>
            </section>
            <SectionBanner src={RobotsTitle}>
            </SectionBanner>
            <section id="RobotsSection">
                <Robot column={1} row={1} src={TeamBPhoto} label={"4067B"}/>
                <Robot column={3} row={1} src={TeamAPhoto} label={"4067A"}/>
                <Robot column={5} row={1} src={TeamX1Photo} label={"4067X"}/>
                <Robot column={1} row={3} src={TeamX2Photo} label={"4067X"}/>
                <Robot column={3} row={3} src={TeamHMRScorpion} label={"HMR Scorpion"}/>
            </section>
            <section></section>
            <section></section>
            </div>
        </div>
    </div>
  );
}
export default App;
