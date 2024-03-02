import './App.css';
import React, {useState} from 'react';
import CarsList from './components/CarsList';
import carsData from './data/cars.json';

const App = () => {

  const [cars, setCars] = useState(carsData);
  
  return(
    <div className = "AppWrapper">

      <h1>Top 10 Cars of Interest</h1>

      <CarsList cars = {cars} />


    </div>
  )
}

export default App