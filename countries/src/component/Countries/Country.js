import React from "react";
import { deleteCountry } from "../../actions/countriesAction";
import "./Country.css";

const Country = (props) => {
  const { country } = props;
  return (
    <div className="card">
      <div className="box">
        <div className="content">
          <h2>{country.name}</h2>
          <p>Population : {country.population}</p>
          <p>Land_area : {country.land_area}</p>
          <div className="icon-box">
            <button>
              <i class="fas fa-pen"></i>
            </button>
            <button >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
