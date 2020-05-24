import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from '../FAQ/FAQ';
import { AnimatedSwitch } from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer';
import Container from '../Container/Container.js';
//import SearchResults from '../Search/SearchResults.js';


const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Container>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}
        >
          <Route exact path="/list/:id" component={List} />
          {/*<Route exact path="/search/:searchString" component={SearchResults} />*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path='/faq' component={FAQ} />
        </AnimatedSwitch>
      </Container>

    </MainLayout>
  </BrowserRouter>
);

export default App;