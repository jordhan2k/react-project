export const color = {
    primaryGray: "#F2F0F0",
    primaryBlue: "#77D4E5",
    primaryGreen: "#8AC186",
    primaryBeige: "#FDF4C3",
    primaryPurple: "#D6C8F6",
    primaryRed: "#E56F53",
    secondaryDarkBlue: "#3A3B59",
}

export const FILTER_ALL = "All";
export const FILTER_OPEN = "Open";
export const FILTER_COMP = "Completed"



export const toastTypes = {
    SUCCEED: "toast/succeed",
    FAIL: "toast/fail",
    WARNING: "toast/warning"
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

export const statusTypes = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    SUCCEEDED: "SUCCEEDED",
    FAILED: "FAILED"
}

export const defaultImages = {
    TRACK_ARTWORK : "https://i.ibb.co/vdWPnhw/com-hidea-cat.png",
    PLAYLIST_IMAGE: "https://i.ibb.co/fGK2Kcn/catnsoup.jpg"

}


export const snackbarSeverity = {
    ERROR: "error",
    SUCCESS: "success",
    WARNING: "warning"
}