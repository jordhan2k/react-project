import { todoFilterActionTypes, todoFilters } from "../../utils/constants";

const initialState = {
    status: todoFilters[0].status
}

export const todoFilterReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case todoFilterActionTypes.STATUS_CHANGE:
            return {
                ...state,
                status: payload
            }
        default: return state;
    }
}