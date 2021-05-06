import {useState} from "react";
import './Robot.scss'
export const Robot = (props: {src: string, label: string, column: number, row: number}) =>
{
    const [hover, setHover] = useState(false);
    return(
        <div onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)} style={{gridColumn: props.column, gridRow: props.row}} className="robot-container">
            <img src={props.src}/>
            <div style={{opacity: hover ? 1 : 0}} className="robot-title">{props.label}</div>
        </div>
    );
}
