import React from "react";
import "../App.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-us-ctn">
        <h2 className="about-us-ctn-title">About us</h2>

        <p className="about-us-ctn-text">
          Welcome to our home accommodations website! We are a team of
          hospitality enthusiasts who believe in providing our guests with a
          comfortable and memorable stay. Our mission is to make your trip feel
          like a home away from home. We understand that each guest has unique
          needs and preferences, which is why we offer a wide range of
          accommodations to fit every type of traveler. Whether you're here for
          a short vacation or an extended stay, we have something to suit your
          needs. Our team takes pride in offering exceptional service and
          amenities to ensure that your stay is comfortable and stress-free.
          From clean and cozy bedrooms to fully equipped kitchens, we have
          thoughtfully designed every aspect of our accommodations to provide
          you with everything you need to feel at home. At our home
          accommodations, we strive to create a warm and welcoming atmosphere
          that makes you feel like part of the family. We believe that every
          guest deserves a personalized and authentic experience, and we do our
          best to provide that for you. We are committed to sustainability and
          giving back to our local community. We source local and eco-friendly
          products whenever possible and partner with local organizations to
          support the community.
        </p>
      </section>
      <section className="vision">
        <h2 className="vision-title">Our Vision</h2>
        <p className="vision-text">
          To be the leading provider of home accommodations that redefine the
          travel experience and make every guest feel at home.
        </p>
      </section>
      <section className="mission">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          Our mission is to provide our guests with comfortable, personalized,
          and memorable home accommodations that cater to their unique needs
          and preferences. We strive to create a warm and welcoming
          environment that fosters a sense of community and belonging. We are
          committed to sustainable practices, giving back to our local
          community, and ensuring that every guest feels like part of the
          family. Our goal is to exceed expectations and make every stay
          unforgettable.
        </p>
      </section>

      <section className="about-us-details">
        <div className="abtUs-card">
          <img
            src="/agent-clipart.png"
            alt="agent pic"
            className="abtUs-img"
          />
          <h4>John Doe</h4>
          <p>Lorem ispum</p>
        </div>
        <div className="abtUs-card">
          <img
            src="/agent-clipart.png"
            alt="agent pic"
            className="abtUs-img"
          />
          <h4>John Doe</h4>
          <p>Lorem ispum</p>
        </div>
        <div className="abtUs-card">
          <img
            src="/agent-clipart.png"
            alt="agent pic"
            className="abtUs-img"
          />
          <h4>John Doe</h4>
          <p>Lorem ispum</p>
        </div>
      </section>
      <h1 className="agents-title">Meet Our Agents</h1>
      <section className="agents-section">
        <div className="agents-profile">
          <img
            src="/agent-clipart.png"
            alt="agent pic"
            className="agents-profile-img"
          />
          <h4>John Doe</h4>
          <p>
            Lorem ispum <span>icons</span>
          </p>
        </div>
        <div className="agents-profile">
          <img
            src="/agent-clipart.png"
            alt="agent pic"
            className="agents-profile-img"
          />
          <h4>John Doe</h4>
          <p>
            Lorem ispum <span>icons</span>
          </p>
        </div>
        <div className="agents-profile">
          <img
            src="/agent-clipart.png"
            alt="agent pic2"
            className="agents-profile-img"
          />
          <h4>John Doe</h4>
          <p>
            Lorem ispum <span>icons</span>
          </p>
        </div>
      </section>
    </div>
  );
}
