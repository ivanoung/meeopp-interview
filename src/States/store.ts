import { applyMiddleware, createStore, Action, compose } from "redux";
import thunk, { ThunkDispatch, ThunkAction } from "redux-thunk";

// combining reducers for mobile and 'desktop' version
import { combineReducers } from "redux";

import { FormAction } from "./actions_form";
import { formReducer, IFormState } from "./reducer_form";

export interface IRootState {
    form: IFormState;
}
export const rootReducer = combineReducers<IRootState>({
    form: formReducer
});

// redux-logger
import logger from "redux-logger";

export type ThunkResult<R> = ThunkAction<R, IRootState, null, FormAction>;

export type ThunkDispatch = ThunkDispatch<IRootState, null, FormAction>;

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
    composeEnhancers(applyMiddleware(thunk, logger))
);
