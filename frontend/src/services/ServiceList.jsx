import React from 'react';
import ServiceCard from './ServiceCard';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
];

const ServiceList = () => {
    return (
        <div className="services-section">
            <h2 className="text-center"></h2>
            <div className="services-container">
                {servicesData.map((item, index) => (
                    <ServiceCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ServiceList;
