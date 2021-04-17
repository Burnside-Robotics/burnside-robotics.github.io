import { SectionBanner} from "../Components/SectionBanner";
import {InfoBox} from "../Components/InfoBox";

export const Vex = () =>
{
    return(
        <section id="VexSection">
            <InfoBox content={["Vex Robotics is the fast growing robotics competition in the world. It contains three divisions: Vex EDR, Vex IQ, and Vex U. Burnside Robotics compete in the Vex EDR division which is for Intermediate and High School students. This year we are planning to compete in Vex IQ as we have enough teams to be able to explore that field. Vex has an annual game for each of its division and these games are introduced in April and are competed in February. This allows competitors to always be kept on their toes and helps them to think of solutions in different ways. This means students need to design, build and program a robot for each new challenge."]} titles={["WHAT IS VEX?"]}/>
            <InfoBox content={["VRC V5 is a robotics system designed for years  9-13. It mostly uses metal construction parts with electric motors and a brain. Incredibly versatile, the competition still has limits to how big the robot can be and how many motors and other components we use. This makes the challenge harder as we have to think of solutions within these limits.", "The VEX IQ system includes plastic, snap-together pieces designed specifically for the dexterity for young hands. Students can easily build their first robot, and the wide variety of additional parts means that students can build a robot that is bigger, stronger, and more functional as students continue to learn."]} titles={["VRC", "IQ"]}/>
        </section>
    );
}