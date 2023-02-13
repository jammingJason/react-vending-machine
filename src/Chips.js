import React from 'react';
const Chips = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div>
        <img src={require('./images/chips1.jpg')} alt="Bag of Chips" />
        <img src={require('./images/chips2.jpg')} alt="Bag of Chips" />
        <img src={require('./images/chips3.jpg')} alt="Bag of Chips" />
      </div>
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>
    </>
  );
};

export default Chips;
