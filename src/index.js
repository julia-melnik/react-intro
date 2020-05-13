import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/AppContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

//ReactDOM.render(<App />, document.getElementById('app')); "znajdź element, którego id to 'app' , i wstaw do niego komponent App ".
//Służy ona do wyświetlenia zawartości strony – w drugim argumencie podajemy element z pliku index.html,do którego będzie wstawiana treść. App - JavaScript XML,
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));