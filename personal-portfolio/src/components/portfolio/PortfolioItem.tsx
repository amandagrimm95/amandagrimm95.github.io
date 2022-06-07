import React from "react";

export function PortfolioItem (props) {

    function renderList(array) {
        return array.map(x => {
            return <li key={x}>{x}</li>
        })
    }
    
    return (
        <div className='portfolioItem'>
            <div className='portfolioInfo'>
                <h3>{props.item.name}</h3>
                <h4>Technologies/Languages</h4>
                <ul>
                    {renderList(props.item.tech)}
                </ul>
                <h4>Features</h4>
                <ul>
                    {renderList(props.item.features)}
                </ul>
            </div>
            <div className='portfolioImgs'>
                <img src={props.item.image} alt='Site Screen Layouts' className='layoutImage'/>
            </div>
            <a href={props.item.link} className='websiteButton'><p>Visit Site</p></a>
        </div>
    )
}