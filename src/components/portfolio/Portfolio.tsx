import React from "react";
import { PortfolioItem  } from "./PortfolioItem";
import { portfolioInfo } from "./portfolioInfo";
import './portfolio.css';
import './portfolio-mobile.css';

export function Portfolio () {

    const iframeStyle = {
        border: "1px solid rgba(0, 0, 0, 0.1)",
        width: "600px",
        height: "450px"
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
            {/* <iframe title="laptop-img" style={iframeStyle} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIuRGy8aRbw6p89uUnlFqpG%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D6%253A2%26viewport%3D529%252C402%252C0.48%26scaling%3Dscale-down"></iframe> */}
        </div>
        
    )
}