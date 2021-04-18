import './AwardComponent.scss'
import {useState} from "react";
type AwardProps = {
    src: string,
    side: number,
    name: string
}
export const Award = (props: AwardProps) =>
{
    const [hover, setHover] = useState([false, false, false]);
    switch(props.side) {
        case(0):
            return(
                    <div onMouseLeave={() => setHover([false,false,false])} onMouseOver={() => setHover([true,false,false])} style={{gridColumn: "1"}} className="award-container">
                        <img src={props.src}/>
                        <div style={{opacity: hover[0] ? 1 : 0}} className="award-title">{props.name}</div>
                    </div>
                );
        case(1):
            return(
                <div onMouseLeave={() => setHover([false,false,false])} onMouseOver={() => setHover([false,true,false])} style={{gridColumn: "3"}} className="award-container">
                    <img src={props.src}/>
                    <div  style={{marginLeft: "-5vw", borderTopLeftRadius: "3vw", opacity: hover[1] ? 1 : 0}} className="award-title">{props.name}</div>
                </div>
            );
        case(2):
            return(
                <div onMouseLeave={() => setHover([false,false,false])} onMouseOver={() => setHover([false,false,true])} style={{gridColumn: "5"}} className="award-container">
                    <img src={props.src}/>
                    <div style={{marginLeft: "-9.8vw", borderTopLeftRadius: "3vw", borderTopRightRadius: 0, opacity: hover[2] ? 1 : 0}} className="award-title">{props.name}</div>
                </div>
            );
        default:
            return(
                <h1>That's not a side</h1>
            );
    }
}