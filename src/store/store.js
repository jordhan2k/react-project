import { applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index';

let preloadState;
const persistedTodoString = localStorage.getItem('todos');

if (persistedTodoString) {
    preloadState = {
        todos: JSON.parse(persistedTodoString)
    }
}

const composedEnhancer = composeWithDevTools(
    applyMiddleware()
)


const store = createStore(rootReducer, preloadState, composedEnhancer);



export default store;