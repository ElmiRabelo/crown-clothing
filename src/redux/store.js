import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const minddlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...minddlewares));

export default store;
