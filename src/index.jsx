import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';
//import { PersistGate } from 'redux-persist/integration/react'
//import { saveContact, deleteContact } from 'redux/actions';

/*comment for persist*/
ReactDOM.render(
  <Provider store={store}>
    {/*<PersistGate loading={null} persistor={store.persistor}>*/}
    <App />
    {/*</PersistGate>*/}
  </Provider>,
  document.getElementById('root'),
);
