import { todoFilterActionTypes } from "../../utils/constants";

export const changeFilter = filter => {
    return {
        type: todoFilterActionTypes.STATUS_CHANGE,
        payload: filter
    };
}