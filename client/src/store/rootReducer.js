import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import activitiesReducer from "./activityReducer";
import itinerayReducer from "./itineraryReducer";
const rootReducer = combineReducers({citiesReducer: citiesReducer,itinerayReducer: itinerayReducer,activitiesReducer: activitiesReducer });
export default rootReducer;