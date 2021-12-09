import ActionTypes from "../constants/ActionTypes";

const defaultState = {

}

export const noteReducer = (initialState = defaultState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TASK:
            return { ...initialState, {
                payload.noteTitle,
                    payload.noteContent
            }
    }
}
}