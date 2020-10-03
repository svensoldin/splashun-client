import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import pictureReducer from "./picture/picture.reducer";
import alertReducer from "./alert/alert.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	picture: pictureReducer,
	alerts: alertReducer,
});

export default rootReducer;
