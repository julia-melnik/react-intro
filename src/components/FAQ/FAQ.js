import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import { pageContents } from '../../data/dataStore.js';
import Hero from '../Hero/Hero';

const FAQ = props => (
  <Container>
    <Hero titleText={props.title} img={props.image} />
    <p className={props.description}></p>
  </Container>
);

FAQ.defaultProps = {
  title: pageContents.titleFAQ,
  description: pageContents.descriptionFAQ,
  image: pageContents.imageFAQ,
};

FAQ.propTypes = { //static , które oznacza że będziemy de3niować statyczną właściwość tej klasy
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.node,

};

export default FAQ;