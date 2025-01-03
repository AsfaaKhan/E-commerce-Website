import { combineReducers } from "redux";
import addItem from "./addItem";

const rootReducer = combineReducers({
    handleAddToCart: addItem, // Alias the cart reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
