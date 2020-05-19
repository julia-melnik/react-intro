import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';

class List extends React.Component {

  /*state = { //początkowy stan 
    columns: this.props.columns || [],
  } //jeśli this.props.columns nie zostało zde3niowane, czyli komponent nie otrzymał propsa columns , to w this.state.columns znajdzie się pusta tablica []
*/
  static propTypes = { //static , które oznacza że będziemy de3niować statyczną właściwość tej klasy
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  /* addColumn(title) {
     this.setState(state => (
       {
         columns: [
           ...state.columns,
           {
             key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
             title,
             icon: 'list-alt',
             cards: [],
           },
         ],
       }
     ));
   }*/

  render() {
    const { title, image, description, columns, addColumn } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} img={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          {/*<Hero titleText={this.props.title} img={this.props.image}></Hero>
        <div className={styles.description}>
          *{this.props.description}
          {ReactHtmlParser(this.props.description)} */}
          <div className={styles.columns}>
            {/* zmiana 1 
            <Column titleColumn={'Animals'}/>
          <Column titleColumn={'Plants'}/>
          <Column titleColumn={'Minerals'}/> 
        zmiana 2
          {this.state.columns.map(({ key, ...columnProps }) => (//???  
            <Column key={key} {...columnProps} />
          ))} */}
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </section>
      </Container>

    );
  }
}
export default List; //Dzięki niemu, importując App w pliku index.js , możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {App} from'...'; , tak jak do tej pory to robiliśmy.
/* KOMPON. KLASOWY:
this oznacza tę instancję klasy List .
props - zawiera wszystkie właściwości przekazane do tego komponentu
title – to nazwa właściwości.
KOMPON. FUNKCYJNY:
propsy będą przekazane jako argument funkcji. */
