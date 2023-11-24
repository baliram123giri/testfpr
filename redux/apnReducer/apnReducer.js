export const UPDATE_APN_DATA = "UPDATE_APN_DATA"


const initialState = {
    apnFormData: null,
}

export const apnReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_APN_DATA:
            return { ...state, apnFormData: action.payload }
        default:
            return state
    }
}