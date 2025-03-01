import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import tourData from "../assets/data/tours";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";

const Tours = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        // Calculate the number of pages and set it
        const pages = Math.ceil(tourData.length / 4);  
        setPageCount(pages);  // Update the page count
    }, [tourData.length]);  

    const handlePageChange = (newPage) => {
        setPage(newPage);  // Update the current page
    };

    const paginatedTours = tourData.slice(page * 8, (page + 1) * 8);  // Paginate the tours data

    return (
        <>
            <CommonSection title={"All Tours"} />
            <section>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    <Row>
                        {paginatedTours?.map((tour) => (
                            <Col lg="3" className="mb-4" key={tour.id}>
                                <TourCard tour={tour} />
                            </Col>
                        ))}

                        <Col lg="12">
                            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map((number) => (
                                    <span 
                                        key={number} 
                                        onClick={() => setPage(number)} 
                                        className= {page== number ? "active__page" : ""}
                                       
                                    >
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newsletter/>
        </>
    );
};

export default Tours;
