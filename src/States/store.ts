import {
    combineReducers,
    applyMiddleware,
    createStore,
    Action,
    compose
} from "redux";
import thunk from "redux-thunk";

import { formReducer, IFormState } from "./reducer_form";

// Importing Firebase
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAzx9fWrdK_tgKtRik-eqqYH3RsEVJAVZs",
    authDomain: "meeopp-interview.firebaseapp.com",
    databaseURL: "https://meeopp-interview.firebaseio.com",
    projectId: "meeopp-interview",
    storageBucket: "meeopp-interview.appspot.com",
    messagingSenderId: "36017066191"
};

export const rrfConfig = {
    userProfile: "users"
};

const fbInstant = firebase.initializeApp(config);
export const db = firebase.firestore(fbInstant);

export interface IRootState {
    form: IFormState;
}
export const rootReducer = combineReducers<IRootState>({
    form: formReducer
});

// redux-logger
import logger from "redux-logger";

// redux-dev-tools
declare global {
    // tslint:disable-next-line:interface-name
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
export const store = createStore<IRootState, Action, {}, {}>(
    rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({ getFirebase, getFirestore }),
            logger
        ),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, rrfConfig)
    )
);
