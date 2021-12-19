import React from 'react';

function Car({ brand }) {
  const { name, model } = brand;
  return (
    <>
      <h2>I am a {model}!</h2>
      <h2>I am a {name}!</h2>
    </>
  );
}

function Garage() {
  const carInfo = { name: 'Ford', model: 'Mustang' };
  return (
    <>
      <h1 className="heading">Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}

export default Garage;
