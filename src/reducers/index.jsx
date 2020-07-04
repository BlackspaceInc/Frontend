import {combineReducers} from "redux"
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import thirdPartyCompaniesReducer from "./thirdPartyCompaniesReducer";

export default combineReducers({
    errors : errorReducer,
    auth: authReducer,
    thirdPartyCompanies: thirdPartyCompaniesReducer,
})

