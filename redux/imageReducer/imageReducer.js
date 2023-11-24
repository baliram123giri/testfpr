export const UPDATE_IMAGE_DATA = "UPDATE_IMAGE_DATA"


const initialState = {
    imageFormData: null,
}

export const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_IMAGE_DATA:
            return { ...state, imageFormData: action.payload }
        default:
            return state
    }
}