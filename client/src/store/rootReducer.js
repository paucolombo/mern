import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itinerayReducer from "./itineraryReducer";
const rootReducer = combineReducers({citiesReducer: citiesReducer,itinerayReducer: itinerayReducer });
export default rootReducer;