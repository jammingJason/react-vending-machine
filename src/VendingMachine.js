import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';
import NavBar from './NavBar';

const VendingMachine = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Chips /> */}
      <Route exact path="/" render={() => <Home msg="Hello" />} />
      <Route exact path="/chips" render={() => <Chips />} />
      <Route exact path="/soda" render={() => <Soda />} />
      <Route exact path="/candy" render={() => <Candy />} />
    </BrowserRouter>
  );
};

export default VendingMachine;
