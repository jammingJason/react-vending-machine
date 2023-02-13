import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ msg }) => {
  return (
    <>
      <div>
        <Link to="/chips">
          <h3>Chips</h3>
          <img
            src={require('./images/chips.jpg')}
            alt="Bag of Chips"
            width="25%"
          />
        </Link>
      </div>
      <div>
        <Link to="/soda">
          <h3>Soda</h3>
          <img
            src={require('./images/soda.jpg')}
            alt="Bag of Chips"
            width="25%"
          />
        </Link>
      </div>
      <div>
        <Link to="/candy">
          <h3>Candy</h3>
          <img
            src={require('./images/candy.jpg')}
            alt="Bag of Chips"
            width="25%"
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
