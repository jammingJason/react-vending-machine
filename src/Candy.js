import React from 'react';

const Candy = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div>
        <img src={require('./images/candy1.jpg')} alt="Bag of Chips" />
        <img src={require('./images/candy2.jpg')} alt="Bag of Chips" />
        <img src={require('./images/candy3.jpg')} alt="Bag of Chips" />
      </div>
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>
    </>
  );
};

export default Candy;
