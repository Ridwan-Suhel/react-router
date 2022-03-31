import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Country.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Welcome to my world {countries.length}</h3>
      <ul className="country-ul">
        {countries.map((country) => (
          <li key={country.area}>
            {" "}
            <Link to={`/country/${country.name.common}`}>
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
