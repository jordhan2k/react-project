export const color = {
    primaryGray: "#F2F0F0",
    primaryBlue: "#77D4E5",
    primaryGreen: "#8AC186",
    primaryBeige: "#FDF4C3",
    primaryPurple: "#D6C8F6",
    secondaryDarkBlue: "#3A3B59"
}

export const FILTER_ALL = "All";
export const FILTER_OPEN = "Open";
export const FILTER_COMP = "Completed"


export const todoActionTypes = {
    ADD : "todos/addTodo",
    EDIT : "todos/editTodo",
    DELETE: "todos/deleteTodo",
}

export const todoFilterActionTypes = {
    STATUS_CHANGE: "todoFilter/statusChange"
}


export const todoFilters = [
    {
        status: "All",
        color: color.primaryBlue
    },
    {
        status: "Open",
        color: color.primaryBeige
    },
    {
        status: "Completed",
        color: color.primaryGreen
    }
];
