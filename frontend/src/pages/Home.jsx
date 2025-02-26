import React from "react";
import '../styles/home.css';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from "../assets/images/experience.png"
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../assets/components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../assets/components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../assets/components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
const Home = () => {
    return (
        <>
            {/*===== Hero Section Start ====*/ }
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero_content">
                                <div className="hero_subtitle d-flex align-items-center">
                                    <span className="subtitle">Know Before You Go</span>
                                    <img src={worldImg} alt="World" />
                                </div>
                                <h1>
                                    Traveling opens the door to creating <span className="highlight">memories</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque aspernatur minus at? Maiores vero eveniet provident autem quasi alias voluptatum. Fugiat omnis necessitatibus placeat? Quidem, ipsam! Ut ad quas pariatur!
                                </p>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero_img-box">
                                <img src={heroImg} alt="Hero Image 1" />
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero_img-box mt-4">
                                <video src={heroVideo} alt="Hero Video" controls />
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero_img-box mt-5">
                                <img src={heroImg02} alt="Hero Image 2" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <SearchBar />
                        </Col>
                    </Row>

                    {/* Services Section */}
                    <Row className="mt-5">
                        <Col lg="12">
                            <h5 className="services_subtitle">What we serve</h5>
                            <h2 className="services_title">We offer our best services</h2>
                        </Col>
                        <Col lg="12">
                            <ServiceList />
                        </Col>
                    </Row>

                    {/* Explore Section */}
                    <Row className="mt-5">
                        <Col lg="12">
                            <h5 className="services_subtitle">Explore</h5>
                            <h2 className="featured_tour-title">Our featured tours</h2>
                        </Col>
                        <FeaturedTourList/>
                    </Row>
                </Container>
            </section>
            {/*=====EXPERICENCE SECTION START======*/}
                <section>
                    <Container>
                        <Row>
                            <Col lg='6'>
                            <div className="experience_content">
                                <h5 className="services_subtitle">Experience</h5>

                                <h2>With our all experience<br/>we will serve you</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                <br/> Earum praesentium tempore quaerat velit nobis culpa obcaecati consequuntur deleniti ipsa nam, quidem vero magnam numquam, qui esse quo perspiciatis, est ullam.</p>
                            </div>
                            <div className="counter_warpper d-flex align-intems-center gap-5">
                              <div className="counter_box">
                                <span>12k+</span>
                                <h6>Successful trip</h6>
                              </div>

                              <div className="counter_box">
                                <span>2k+</span>
                                <h6>Regular clients</h6>
                              </div>

                              <div className="counter_box">
                                <span>15</span>
                                <h6>Years experience</h6>
                              </div>
                            </div>
                            
                            </Col>
                            <Col lg='6'>
                            <div className="experience_img">
                             <img src={experienceImg} alt=""/>   
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

             {/*=====EXPERICENCE SECTION end======*/}
             {/*=====Gallary section start======*/}
            <section>
            <Container>
                <Row>
                    <Col lg='12'>
                       <h5 className="services_subtitle">Gallery</h5>
                        <subtitle subtitle={'Gallery'}/>
                        <h2 className="gallery_title">
                        visit our customers tour gallary
                        </h2>
                    </Col>
                    <Col lg='12'>
                     <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
            </section>


             {/*=====Gallary section end======*/}

             {/*======testimonal section start=====*/}
            <section>
                <Row>
                    <Col lg='12'>
                    <h5 className="services_subtitle2">Fans Love</h5>
                     <subtitle subtitle={'Fans Love'}/>
                     <h2 className="testimonal_title">What our fans say about us</h2>
                    
                    </Col>
                    <Col lg='12'>
                     <Testimonials/>
                    </Col>
                </Row>
            </section>

             {/*======testimonal section end=====*/}
             <Newsletter/>
        </>
    );
};

export default Home;
