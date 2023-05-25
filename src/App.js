import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import ListApartment from "./routes/ListApartment";
import Root from "./routes/Root";
import NoPage from "./routes/NoPage";
import Contact from "./routes/Contact";
import AboutUs from "./routes/AboutUs";
import Cart from "./routes/Cart";
import Listings from "./routes/Listings";
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
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<Root />}>
              <Route
                index
                element={
                  <Home properties={properties} testimonies={testimonies} />
                }
              ></Route>
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
              <Route path="about-us" element={<AboutUs />}></Route>
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
              <Route path="cart" element={<Cart />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="*" element={<NoPage />} />
            </Route>
          )
        )}
      />
    </div>
  );
}
