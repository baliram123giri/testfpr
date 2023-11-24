export const UPDATE_INSTRUMENT_DATA = "UPDATE_INSTRUMENT_DATA"


const initialState = {
    instrumnetFormData: null,
}

export const instrumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INSTRUMENT_DATA:
            return { ...state, instrumnetFormData: action.payload }
        default:
            return state
    }
}