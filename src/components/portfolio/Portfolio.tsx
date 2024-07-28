import React from "react";
import { PortfolioItem  } from "./PortfolioItem";
import { portfolioInfo } from "./portfolioInfo";
import './portfolio.css';
import './portfolio-mobile.css';

export function Portfolio () {

    const iframeStyle = {
        border: "1px solid rgba(0, 0, 0, 0.1)",
        width: "600px",
        height: "450px",
    }

    function renderPortfolioItems() {
        return portfolioInfo.map(x => {
            return <PortfolioItem item={x} key={x.name}/>
        })
    }

    return (
        <div id='portfolioSection'>
            <h2 className="section-title">Portfolio</h2>
            {renderPortfolioItems()}
            {/* <iframe style={iframeStyle} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA25jetTifyUCoXe7JCw4M%2FStitch-Sculptor%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D219-131%26viewport%3D-247%252C338%252C0.09%26t%3D09qDuPbGVi2pjZ72-1%26scaling%3Dscale-down%26starting-point-node-id%3D219%253A131%26mode%3Ddesign" allowFullScreen={true}></iframe> */}
        </div>
        
    )
}