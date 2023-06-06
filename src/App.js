import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import ListApartment from "./Components/ListApartment";
import Root from "./Components/Root";
import Navigbar from "./Components/Navigbar";
import NoPage from "./Components/NoPage";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Cart from "./Components/Cart";
import Listings from "./Components/Listings";
import listings from "./listings.json";
import testimonials from "./testimonials.json";
import { useEffect } from "react";

export default function App() {
  const [properties, setProperties] = useState(listings);
  const [testimonies, setTestimonies] = useState(testimonials);
  //state that stores the user input
  const [propertiesSearch, setPropertiesSearch] = useState({
    city: "",
    location: "",
    bedroom: 0,
    bathroom: 0,
    minPrice: 0,
    maxPrice: 0,
    minArea: 0,
    maxArea: 0,
  });
  //state that stores the filtered results
  const [filtered, setFiltered] = useState([]);
  const [userListings, setUserListings] = useState({
    id: Math.random(),
    title: "",
    address: "",
    description: "",
    price: 0,
    bedroom: 0,
    bathroom: 0,
    sqrft: 0,
  });

  //handles all the input event changes
  function handleChange(e) {
    const name = e.target.name;
    const value =
      e.target.type === "number" ? parseInt(e.target.value) : e.target.value;
    setPropertiesSearch((prevPropertiesSearch) => {
      return {
        ...prevPropertiesSearch,
        [name]: value,
      };
    });
  }

  //handles the search button click event
  function click() {
    let result = properties.filter((property) => {
      return (
        property.city
          .toLowerCase()
          .includes(propertiesSearch.city.toLowerCase()) &&
        property.bedroom === propertiesSearch.bedroom &&
        property.bathroom === propertiesSearch.bathroom &&
        property.price >= propertiesSearch.minPrice &&
        property.price <= propertiesSearch.maxPrice &&
        property.sqrft >= propertiesSearch.minArea &&
        property.sqrft <= propertiesSearch.maxArea
      );
    });
    setFiltered(result);
  }

  //handle listing input event changes
  function handleUserListing(e) {
    const name = e.target.name;
    const value =
      e.target.type === "number" ? parseInt(e.target.value) : e.target.value;
    setUserListings((prevUserListing) => {
      return {
        ...prevUserListing,
        [name]: value,
      };
    });
  }

  //handles listing submit button event
  function listingSubmit() {
    setProperties((prevProperties) => {
      const newProperties = [...prevProperties, userListings];
      localStorage.setItem("properties", JSON.stringify(newProperties));
      return newProperties;
    });
    console.log(properties);
  }

  useEffect(() => {
    const storedProperties = localStorage.getItem("properties");
    if (storedProperties) {
      setProperties(JSON.parse(storedProperties));
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home properties={properties} testimonies={testimonies} />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            path="list-apartment"
            element={
              <ListApartment
                properties={properties}
                userListings={userListings}
                handleUserListing={handleUserListing}
                listingSubmit={listingSubmit}
              />
            }
          ></Route>
          <Route
            path="listings"
            element={
              <Listings
                properties={properties}
                propertiesSearch={propertiesSearch}
                filtered={filtered}
                click={click}
                handleChange={handleChange}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
