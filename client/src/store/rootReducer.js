import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import activitiesReducer from "./activityReducer";
import itinerayReducer from "./itineraryReducer";
import usersReducer from "./userReducer";
const rootReducer = combineReducers({citiesReducer: citiesReducer, usersReducer: usersReducer, itinerayReducer: itinerayReducer,activitiesReducer: activitiesReducer });
export default rootReducer;