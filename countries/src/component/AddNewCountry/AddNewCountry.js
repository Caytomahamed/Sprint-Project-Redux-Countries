import axios from "axios";
import React, { useState } from "react";
import './AddNewCountry.css'
import { FechData } from "../../actions/countriesAction";
import { useDispatch } from "react-redux";

function AddNewCountry() {
  // 1. Set up state for form
  const initialState = {
    id: Date.now(),
    name: "",
    population: "",
    land_area: "",
  };

  const dispatch = useDispatch()
  
  const [form, setForm] = useState(initialState);
  // 2. Create "handleChange" function to handle form changes and add changes to above state
  const country = form
  const handleChange = (event) => {
    const text = { ...form, [event.target.name]: event.target.value };
    setForm(text);
   
  };
  // 3. Create "handleSubmit" function to send data to http://localhost:3333/countries using POST request.
  // Make sure to update your countries list to show the recently added country.

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(FechData(form))
    setForm(initialState);
  };
  
  return (
    <div className="form-component">
      <div className="container form-box">
        <div className="form-bg">
          <form onSubmit={handleSubmit} id="form">
            <h3 className="sub-title2">add new country</h3>
            <label htmlFor="label">
              Name
              <input
                type="text"
                name="name"
                placeholder="Enter the country Name"
                value={form.name}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="label">
              Population
              <input
                type="number"
                name="population"
                placeholder="Enter the country Population"
                value={form.population}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="label">
              Land_area
              <input
                type="number"
                name="land_area"
                placeholder="Enter the country Land_area"
                value={form.land_area}
                onChange={handleChange}
              />
            </label>

            <button class="btn btn-gradient btn-animated btn-submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewCountry;
