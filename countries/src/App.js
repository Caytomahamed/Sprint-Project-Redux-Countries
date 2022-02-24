import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FechData } from './actions/countriesAction';
import './App.css';
import AddNewCountry from './component/AddNewCountry/AddNewCountry';
import Countries from './component/Countries/Countries';
import Header from './component/Header/Header';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const  App = () =>  {
    const countries = useSelector((state) => state.countries)

    const dispatch = useDispatch();
    useEffect(() => {
      const data = dispatch(FechData())
    })
   
    return (
      <div className="App">
        <Header/>
        <Countries/>
        <AddNewCountry/>
      </div>
    );
  }

export default App;
