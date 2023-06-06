import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBed, faBathtub, faSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faBed, faBathtub, faSquare);

export default function Listings(props) {
  //shows the property listings
  const propertiesView = (
    props.filtered.length > 0 ? props.filtered : props.properties
  ).map((property) => {
    return (
      <div key={property.id} className="card">
        <img src="/heroImg2.jpg" alt="" className="card-img" />
        <div className="card-text">
          <h4>{property.title}</h4>
          <p> {property.city}</p>
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

  return (
    <div className="listings">
      <div className="nav-search">
        <label htmlFor="city">City</label>
        <input
          onChange={props.handleChange}
          value={props.propertiesSearch.city}
          name="city"
          required
        />

        <label htmlFor="bedroom">Bedroom</label>
        <input
          onChange={props.handleChange}
          name="bedroom"
          value={props.propertiesSearch.bedroom}
          type="number"
        />
        <label htmlFor="bathroom">Bathroom</label>
        <input
          onChange={props.handleChange}
          name="bathroom"
          value={props.propertiesSearch.bathroom}
          type="number"
        />
        <label htmlFor="minPrice">Min Price($)</label>
        <input
          onChange={props.handleChange}
          name="minPrice"
          value={props.propertiesSearch.minPrice}
          type="number"
        />
        <label htmlFor="maxPrice">Max Price($)</label>
        <input
          onChange={props.handleChange}
          name="maxPrice"
          value={props.propertiesSearch.maxPrice}
          type="number"
        />
        <label htmlFor="minArea">Min Area (sqrft)</label>
        <input
          onChange={props.handleChange}
          name="minArea"
          value={props.propertiesSearch.minArea}
          type="number"
        />
        <label htmlFor="maxArea">Max Area(sqrft)</label>
        <input
          onChange={props.handleChange}
          name="maxArea"
          value={props.propertiesSearch.maxArea}
          type="number"
        />
        <button onClick={props.click}>Search</button>
      </div>

      <div className="top-props">{propertiesView}</div>
    </div>
  );
}
