import './SectionBanner.scss'
import React from "react";

type BannerProps = {
    src: string,
}
export const SectionBanner = (props: React.PropsWithChildren<BannerProps>) =>
{
    return(
        <div className="section-banner" style={{backgroundImage: "url('" + props.src + "')"}}>{props.children}</div>
    );
}
