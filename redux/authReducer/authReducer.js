export const UPDATE_USER_INFO = "UPDATE_USER_INFO"


const initialState = {
    userInfo: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return { ...state, userInfo: action.payload }
        default:
            return state
    }
}