import React from 'react';
import './service-card.css';

const ServiceCard = ({ item }) => {
    const { imgUrl, title, desc } = item;

    return (
        <div className="service-card">
            <div className="service-card-img">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="service-card-content">
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
