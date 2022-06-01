import React from "react";
import { PortfolioItem  } from "./PortfolioItem";
import { portfolioInfo } from "./portfolioInfo";
import './portfolio.css';

export function Portfolio () {

    function renderPortfolioItems() {
        return portfolioInfo.map(x => {
            return <PortfolioItem item={x}/>
        })
    }

    return (
        <div id='portfolioSection'>
            <h2>Portfolio</h2>
            {renderPortfolioItems()}
        </div>
        
    )
}