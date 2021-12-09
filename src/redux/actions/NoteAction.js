import ActionTypes from "../constants/ActionTypes"

export const addNotes = (payload) => {
    return {
        type: ActionTypes.ADD_TASK,
        payload: payload
    }
}

export const removeNotes = (payload) => {
    return {
        type: ActionTypes.REMOVE_TASK,
        payload: payload
    }
}