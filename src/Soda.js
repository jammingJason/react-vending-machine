import React from 'react';
import { Link } from 'react-router-dom';

const Soda = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div>
        <img src={require('./images/soda1.jpg')} alt="Bag of Chips" />
        <img src={require('./images/soda2.jpg')} alt="Bag of Chips" />
        <img src={require('./images/soda3.jpg')} alt="Bag of Chips" />
      </div>
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>
    </>
  );
};

export default Soda;
