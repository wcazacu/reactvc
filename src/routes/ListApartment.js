import React from "react";

export default function ListApartment(props) {
  return (
    <div>
      <h1>Test page for Listing Items</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Title</label>
        <input name="title" onChange={props.handleUserListing} />
        <label> Address</label>
        <input name="address" onChange={props.handleUserListing} />
        <label>City</label>
        <input name="city" onChange={props.handleUserListing} />
        <label>Description</label>
        <input name="description" onChange={props.handleUserListing} />
        <label>Bedroom</label>
        <input
          type="number"
          name="bedroom"
          onChange={props.handleUserListing}
        />
        <label>Bathroom</label>
        <input
          type="number"
          name="bathroom"
          onChange={props.handleUserListing}
        />
        <label>Price</label>
        <input type="number" name="price" onChange={props.handleUserListing} />
        <label>Square-feet</label>
        <input type="number" name="sqrft" onChange={props.handleUserListing} />
        <button onClick={props.listingSubmit}>Submit</button>
      </form>
    </div>
  );
}
