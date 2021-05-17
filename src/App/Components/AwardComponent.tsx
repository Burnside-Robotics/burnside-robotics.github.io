import './AwardComponent.scss'
import {useState} from "react";
type AwardProps = {
    src: string,
    side: number,
    name: string
}
export const Award = (props: AwardProps) =>
{
    const [hover, setHover] = useState(false);
    switch(props.side) {
        case(0):
            return(
                    <div onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)} style={{gridColumn: "1"}} className="award-container">
                        <img src={props.src} alt='Award'/>
                        <div style={{opacity: hover ? 1 : 0}} className="award-title">{props.name}</div>
                    </div>
                );
        case(1):
            return(
                <div onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)} style={{gridColumn: "3"}} className="award-container">
                    <img src={props.src} alt='Award'/>
                    <div  style={{marginLeft: "-5vw", borderTopLeftRadius: "3vw", opacity: hover ? 1 : 0}} className="award-title">{props.name}</div>
                </div>
            );
        case(2):
            return(
                <div onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)} style={{gridColumn: "5"}} className="award-container">
                    <img src={props.src} alt='Award'/>
                    <div style={{marginLeft: "-9.8vw", borderTopLeftRadius: "3vw", borderTopRightRadius: 0, opacity: hover ? 1 : 0}} className="award-title">{props.name}</div>
                </div>
            );
        default:
            return(
                <h1>That's not a side</h1>
            );
    }
}