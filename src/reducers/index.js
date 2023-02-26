import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducers from "./userReducers";
import fileReducers from "./fileReducers";

// Вспомогательная функция combineReducers преобразует объект
// значениями которого являются различные функции редюсеры,
// в одну функцию редюсер, которую можно передать в метод createStore

const rootReducer = combineReducers({
    user: userReducers,
    file: fileReducers

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
