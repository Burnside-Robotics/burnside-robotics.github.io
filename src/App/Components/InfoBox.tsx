import './InfoBox.scss'

type infoProps = {
    content: string[],
    titles: string[],
    image?: string
}

export const InfoBox = (props: infoProps) => {
    if (props.image)
    {
        return(
            <div style={{gridTemplateColumns: "45% auto 20%"}} className="info-box">
                <div className='info-box-section'>
                    <h2 style={{textAlign: "left"}}>{props.titles[0]}</h2>
                    <p style={{textAlign: "left"}}>
                        {props.content[0]}
                    </p>
                </div>
                {/*Empty Div for column spacing*/}
                <div></div>
                <img src={props.image} alt="TaitLogo" />
            </div>
        );
    }
    else
    {
        if(props.content.length === 1) {
            return (
                <div style={{gridTemplateColumns: "100%"}} className="info-box">
                    <div className='info-box-section'>
                        <h2>{props.titles[0]}</h2>
                        <p>
                            {props.content[0]}
                        </p>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="info-box">
                    <div className='info-box-section'>
                        <h2>{props.titles[0]}</h2>
                        <p>
                            {props.content[0]}
                        </p>
                    </div>
                    <div className="info-box-splitter"/>
                    <div className='info-box-section'>
                        <h2>{props.titles[1]}</h2>
                        <p>
                            {props.content[1]}
                        </p>
                    </div>
                </div>
            );
        }
    }

}
