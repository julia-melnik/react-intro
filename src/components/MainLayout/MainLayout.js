import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';


const MainLayout = ({children}) => (
  <div>
    <Header/>  {/*wyswietl. nawigacje*/ }
    {children} {/*renderuje wszystko co zostało dodane w tagach <MainLayout> w App.js*/ }
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
