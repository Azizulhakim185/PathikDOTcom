import React from "react";
import Slider from 'react-slick';
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.jpg';
import ava03 from '../../images/ava-3.jpg';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500, // Adjusted for smoother transitions
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eius deserunt at
          beatae quibusdam dolores minus, reiciendis sapiente voluptatibus vero, asperiores quae
          ipsam nisi autem consequatur, recusandae sed eveniet. Nulla.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="Customer 1" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eius deserunt at
          beatae quibusdam dolores minus, reiciendis sapiente voluptatibus vero, asperiores quae
          ipsam nisi autem consequatur, recusandae sed eveniet. Nulla.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="Customer 2" />
          <div>
            <h6 className="mb-0 mt-3">Jane Smith</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eius deserunt at
          beatae quibusdam dolores minus, reiciendis sapiente voluptatibus vero, asperiores quae
          ipsam nisi autem consequatur, recusandae sed eveniet. Nulla.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="Customer 3" />
          <div>
            <h6 className="mb-0 mt-3">Mike Johnson</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eius deserunt at
          beatae quibusdam dolores minus, reiciendis sapiente voluptatibus vero, asperiores quae
          ipsam nisi autem consequatur, recusandae sed eveniet. Nulla.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="Customer 1" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
