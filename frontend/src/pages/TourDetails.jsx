import React, {useRef, useState} from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "./../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../assets/components/Booking/Booking";

const exchangeRate = 110; // 1 USD = 110 BDT

const TourDetails = () => {
    const { id } = useParams();
    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating]= useState(null)

    const tour = tourData.find((tour) => tour.id.toString() === id);

    if (!tour) {
        return <h2 className="text-center">Tour not found</h2>;
    }

    const { photo, title, desc, price, address, reviews, city, maxGroupSize, distance } = tour;

    const options = { day: "numeric", month: "long", year: "numeric" };
    const submitHandler = e=>{
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;
    };

    const { totalRating, avgRating } = calculateAvgRating(reviews);

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="tour__content">
                            <img src={photo} alt={title} />

                            <div className="tour__info">
                                <h2>{title}</h2>
                                <div className="d-flex align-items-center gap-5">
                                    <span className="tour__rating d-flex align-items-center gap-1">
                                        <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                                        {avgRating === 0 ? null : avgRating}
                                        {totalRating === 0 ? "Not rated" : <span>({reviews?.length})</span>}
                                    </span>

                                    <span className="d-flex align-items-center gap-1">
                                        <i className="ri-map-pin-user-fill"></i>
                                        <span>{address}</span>
                                    </span>
                                </div>

                                <div className="tour__extra-details">
                                    <span>
                                        <i className="ri-map-pin-2-line"></i> {city}
                                    </span>
                                    <span>
                                        <i className="ri-money-dollar-circle-line"></i> ৳{(price * exchangeRate).toLocaleString()} / per person
                                    </span>
                                    <span>
                                        <i className="ri-map-pin-time-line"></i> {distance} km
                                    </span>
                                    <span>
                                        <i className="ri-group-line"></i> {maxGroupSize} people
                                    </span>
                                </div>

                                <h5>Description</h5>
                                <p>{desc}</p>
                            </div>

                            <div className="tour__reviews mt-5">
                                <h4>Reviews ({reviews?.length} reviews)</h4>

                                <Form className="mb-5" onSubmit= {submitHandler}>
                                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                        {[1, 2, 3, 4, 5].map((rating) => (
                                            <span key={rating} onClick={() => setTourRating(rating)}>
                                                {rating} <i className="ri-star-s-fill"></i>
                                            </span>
                                        ))}
                                    </div>

                                    <div className="review__input d-flex gap-2">
                                        <input
                                            type="text"
                                            ref = {reviewMsgRef}
                                            placeholder="Share your thoughts"
                                            required
                                            className="review__text-input"
                                        />
                                        <button className="btn primary__btn text-white" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </Form>

                                <ListGroup className="mt-4">
                                    {reviews?.map((review, index) => (
                                        <div className="review__item py-3 border-bottom" key={index}>
                                            <img src={avatar} alt="User Avatar" className="me-3" />

                                            <div className="w-100">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <h5>Namira</h5>
                                                        <p>{new Date("01-18-2025").toLocaleDateString("en-US")}</p>
                                                    </div>
                                                    <span className="d-flex align-items-center">
                                                        5 <i className="ri-star-s-fill"></i>
                                                    </span>
                                                </div>

                                                <h6 className="mt-2">Amazing tours</h6>
                                            </div>
                                        </div>
                                    ))}
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                     <Booking tour={tour} avgRating={avgRating}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TourDetails;
