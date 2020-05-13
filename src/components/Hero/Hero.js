import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    {/* <h2 className={styles.title}>{props.titleText} </h2> */}
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.img}/>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node,
  img: PropTypes.string,
};

export default Hero; //Dzięki niemu, importując App w pliku index.js , możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {App} from'...'; , tak jak do tej pory to robiliśmy.
/* KOMPON. KLASOWY:
 this oznacza tę instancję klasy List .
 props - zawiera wszystkie właściwości przekazane do tego komponentu
title – to nazwa właściwości.
KOMPON. FUNKCYJNY:
this - pomijamy
propsy będą przekazane jako argument funkcji. */
