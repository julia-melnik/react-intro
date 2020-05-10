import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component { // Aby komponent mógł być zdefiniowany jako klasa, musi on dziedziczyć po klasie React.Component
  render() {//zwraca obiekt JSX, a konkretniej <main>
    //Podstawową zasadą tworzenia komponentu jest to, że musi zwracać dokładnie jeden element najwyższego poziomu.
    return ( 
      <main className={styles.component}> 
        {/* 
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>A simple to-do app, with lists, columns and cards</h2>
        <List title={['Things to do', <sup key>soon!</sup>]} 
        image={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"}> 
        </List> */}
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    )
  }
}

export default App; //Dzięki niemu, importując App w pliku index.js , możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {App} from'...'; , tak jak do tej pory to robiliśmy.
//{} – pozwalają one na przełączenie się z kodu JSX na zwykły kod JS.