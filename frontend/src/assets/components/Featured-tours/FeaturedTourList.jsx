import React from "react";
import TourCard from "../../../shared/TourCard";
import tours from '../../data/tours';  // Correct path
import { Col } from 'reactstrap';

const FeaturedTourList = () => {
    return (
        <>
            {tours?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour.id}>
                    <TourCard tour={tour} />
                </Col>
            ))}
        </>
    );
};

export default FeaturedTourList;
