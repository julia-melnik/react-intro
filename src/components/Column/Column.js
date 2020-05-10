import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {     

    static propTypes = {
      titleColumn:PropTypes.string
        }

  render() {
    return (
      <section className={styles.component}> 
        <h3 className={styles.title}>{this.props.titleColumn}</h3>
      </section>
    )
  }
}

export default Column; //Dzięki niemu, importując App w pliku index.js , możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {App} from'...'; , tak jak do tej pory to robiliśmy.
