import React from 'react';
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Header from './components/Header';

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <AppRouter />
    <Footer />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();