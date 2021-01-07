import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './firebase';


const store = createStore(rootReducer); //const store is the prop that we pass down to our connect components // store is a property of Provider and dispatch is a method of store.


const rrfProps = { //React Redux Firebase Props = this gives us access to store and dispatch while using Firestore
  firebase,
  config : {
    userProfile: 'users' // This simply states that any data on users will be stored in a collection called "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance 
}

ReactDOM.render(
  <Provider store={store}> 
    <ReactReduxFirebaseProvider {...rrfProps}>
      < App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
