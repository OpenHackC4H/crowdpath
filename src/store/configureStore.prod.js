import { applyMiddleware, createStore, compose } from "redux";
import thunkn from "redux-thunk";
import rootReducer from "../reducers";
import storage from "../utils/storage";

const middlewares = applyMiddleware(routerMiddleware(history), thunk);
const enhancer = compose(middlewares, storage());

export default function(initialState) {
  return createStore( connectRouter(history)(rootReducer, initialState), initialState, enhancer);
}
