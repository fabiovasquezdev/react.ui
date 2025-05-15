import { combineReducers } from "redux";

import app from "./app";
import caseModal from "./caseModal";
const rootReducer = combineReducers({
    app,
    caseModal,
})
export default rootReducer;