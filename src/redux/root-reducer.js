import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import pictureReducer from "./picture/picture.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	picture: pictureReducer,
});

export default rootReducer;
