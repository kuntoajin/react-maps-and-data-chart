import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./redux";

export const store = createStore(reducer, applyMiddleware(thunk));
