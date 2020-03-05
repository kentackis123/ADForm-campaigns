import { createStore } from "redux";
import rootReducer from "./reducers/campaigns";

export default createStore(rootReducer);