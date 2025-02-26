import React, { useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import "./App.css";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setData(response.data.photos.photo));
  };

  return (
    <div className="container">
      <div className="gallery-card">
        <h3 className="title">React Photo Gallery</h3>
        <form onSubmit={submitHandler} className="form">
          <input
            type="text"
            placeholder="Enter Search Element"
            value={search}
            onChange={handler}
            className="input"
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>
        {data.length > 0 ? <Gallery data={data} /> : <h5 className="no-data">No Data Loaded</h5>}
      </div>
    </div>
  );
};

export default App;