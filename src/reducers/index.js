import { combineReducers } from "redux";
import myNotes from "./noteReducer";

const rootReducer = combineReducers({
    myNotes,
})

export default rootReducer;