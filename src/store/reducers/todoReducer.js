import { todo, todoActions } from "../../utils/constants";

const initialState = {
    todos: []

}


const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case todoActions.ADD:
            return {

            };

        case todoActions.DELETE:
            return {

            }

        case todoActions.EDIT:
            return {

            }
        default:
            return state;

    }

}

export default todoReducer;