import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const minddlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...minddlewares));

//uma versão de store com persist, capaz de armazenar os dados
const persistor = persistStore(store);

export default { store, persistor };
