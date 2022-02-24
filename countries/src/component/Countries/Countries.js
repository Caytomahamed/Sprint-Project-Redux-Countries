import React from 'react'
import { useSelector } from "react-redux";
import Country from './Country';
import './Countries.css'
const Countries = () => {
      const countries = useSelector((state) => state.countries);
    return (
      <div className="container">
        <div className="u-center">
          <h1 className="sub-title u-center">List of All Countries</h1>
        </div>

        <ul className="card-box">
          {/* Loop through all countries and send them to 'CountryCard' to display them */}
          {countries.map((country) => (
            <Country country = {country} key = {country.id}/>
          ))}
        </ul>
      </div>
    );
}

export default Countries;
