import React from 'react';
import './style.css';
import Car from './components/Car';
import CarDetails from './components/CarDetails';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Car />
      <CarDetails />
    </div>
  );
}
