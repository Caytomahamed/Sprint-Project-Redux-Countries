import * as all from "../actions/countriesAction";

const init = {
  countries: [],
  fetchingCountries: false,
  addingCountry: false,
  updatingCountry: false,
  deletingCountry: false,
  error: null,
};

export const countriesReducer = (state = init, action) => {

  switch (action.type) {
    case all.START:
      return {
        ...state,
        fetchingCountries: true,
        addingCountry: false,
        updatingCountry: false,
        deletingCountry: false,
        error: null,
      };
    case all.SUCCESS:
      return {
        ...state,
        countries: action.payload,
        fetchingCountries: false,
        addingCountry: true,
        updatingCountry: true,
        deletingCountry: true,
        error: null,
      };
    case all.ADD:
      return {
        ...state,
        countries: [...state.countries , {...action.payload}],
        fetchingCountries: false,
        addingCountry: true,
        updatingCountry: true,
        deletingCountry: true,
        error: null,
      };
    default:
      return state;
  }
};