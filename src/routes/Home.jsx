import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBed, faBathtub, faSquare } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
library.add(faBed, faBathtub, faSquare);
export default function Home(props) {
  const propsCards = props.properties
    .filter((property) => property.rating === 5)
    .map((property) => {
      return (
        <div key={property.id} className="card">
          <img src="/heroImg2.jpg" className="card-img" />
          <div className="card-text">
            <h4>{property.title}</h4>
            <p> {property.address}</p>
            <p className="card-price">${property.price}</p>
            <p>{property.description}</p>
            <p className="card-icons">
              {property.bedroom} Beds
              <span>
                <FontAwesomeIcon icon="bed" />
              </span>
              <span className="card-icons-line"></span>
              {property.bathroom} Baths
              <span>
                <FontAwesomeIcon icon="bathtub" />
              </span>
              <span className="card-icons-line"></span>
              {property.sqrft} Sqrft
              <span>
                <FontAwesomeIcon icon="square" />
              </span>
            </p>
          </div>
          <div className="hover-text">Click for more details</div>
        </div>
      );
    });

  const testimonials = props.testimonies.map((testimony) => {
    return (
      <div key={testimony.id}>
        <img src="/agent-clipart.png" />
        <div className="myCarousel">
          <h3>{testimony.name}</h3>
          <h4>...</h4>
          <p>{testimony.quote}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="home">
      <header className="hero-image">
        <div className="hero-text">
          <h1>Let's find a home that's perfect for you.</h1>
          <p>
            Search confidently with a trusted source for accommodations for rent
          </p>
        </div>
      </header>
      <h1 className="home-title">Top Properties</h1>
      <div className="top-props">{propsCards}</div>
      <section className="testimonials">
        <h1 className="testimonials-title">Testimonials</h1>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {testimonials}
        </Carousel>
      </section>
    </div>
  );
}
