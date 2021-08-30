import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";

import fbconfig from "./config/fbconfig";

import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbconfig)
  )
);
const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <StrictMode>
        <App />
      </StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  rootElement
);
