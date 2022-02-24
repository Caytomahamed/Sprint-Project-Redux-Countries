import axios from "axios";
import AddNewCountry from "../component/AddNewCountry/AddNewCountry";

//ACTION TYPE 
export const START = "START";
export const SUCCESS = "SUCCESS";
export const EROR = "EROR";
export const ADD = "ADD";

//ACTION CRAETOR
export const FechData = (newCountry) => (dispatch) => {
  // Start
  dispatch({ type: START });

  //SUCCESS
  axios.get("http://localhost:3333/countries").then((res) => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch((erro) => {
      dispatch({ type: EROR, payload: erro.message });
    });
    
  // ADD NEW 
   axios.post("http://localhost:3333/countries", newCountry).then((res) => {
     dispatch({
       type: ADD,
       payload: res.data,
     });
     
   });
 
};

