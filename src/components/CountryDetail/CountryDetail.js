import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetail.css";
const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);
  console.log(country);
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, []);
  return (
    <div>
      <div className="top-title-country">
        <span>Country Details of - {countryName}</span>
        <span className="flag">
          <img src={country.flags?.svg} alt="flag" />
        </span>
      </div>
      <p>
        <em>Area: {country.area}</em>
      </p>
      <p>
        <em>Capital: {country.capital}</em>
      </p>
    </div>
  );
};

export default CountryDetail;
