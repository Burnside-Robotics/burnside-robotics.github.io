import React from 'react'
import './About.scss'
import { InfoBox } from '../Components/InfoBox'

export const About = () =>
{
    return(
        <section id="AboutSection">
            <InfoBox content={["Burnside Robotics Club is a team of students attending Burnside High School that love to build robots. We have competed in multiple national Vex Robotics competitions and have qualified for the world competition. Our members are enthusiastic in the areas of STEM (Science, Technology, Engineering, and Maths) and enjoy competing with their creations.", "Burnside robotics offers a range of vital skills such as engineering, programming, teamwork, task management, and much more. These skills help students understand the world around them and help them build up skills in a safe, fun environment. "]} titles={["ABOUT US", "WHAT WE OFFER"]}/>
        </section>
    );
}
