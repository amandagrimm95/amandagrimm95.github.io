import React from "react";
import { PortfolioItem  } from "./PortfolioItem";
import { portfolioInfo } from "./portfolioInfo";
import './portfolio.css';
import './portfolio-mobile.css';

export function Portfolio () {

    function renderPortfolioItems() {
        return portfolioInfo.map(x => {
            return <PortfolioItem item={x} key={x.name}/>
        })
    }

    return (
        <div id='portfolioSection'>
            <h2>Portfolio</h2>
            {renderPortfolioItems()}
        </div>
        
    )
}