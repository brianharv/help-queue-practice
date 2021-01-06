import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/ticket-list-reducer';

const store = createStore(reducer); //const store is the prop that we pass down to our connect components

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
