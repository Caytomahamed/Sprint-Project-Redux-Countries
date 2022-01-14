import React from 'react'
import "./Country.css"
const Country = (props) => {
    const {country } = props
    return (
      <div className='card'>
        <div className="box">
          <div className="content">
            <h2>{country.name}</h2>
            <p>Population : {country.population}</p>
            <p>Land_area : {country.land_area}</p>
          </div>
        </div>
      </div>
    );
}

export default Country
