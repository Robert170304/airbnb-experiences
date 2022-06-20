import React from "react";

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="katie-img"></img>
            <div className="card-info">
                <div className="card-stats">
                    <img src={props.item.star} className="star"></img>
                    <span>{props.item.stats.rating} </span>
                    <span className="gray">({props.item.stats.reviewCount})</span>
                    <span className="gray"> .{props.item.location}</span>
                </div>
                <p className="card-text">{props.item.title}</p>
                <h6>From ${props.item.price} <span>/person</span></h6>
            </div>
        </div>
    )
}