export const ASIDE_BAR_TOGGLE = "ASIDE_BAR_TOGGLE"
export const MY_ACCOUNT_MODAL = "MY_ACCOUNT_MODAL"

const initialState = {
    asideBarToggle: true,
    myAccountModal: false
}

export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case MY_ACCOUNT_MODAL:
            return { ...state, myAccountModal: action.payload }
        case ASIDE_BAR_TOGGLE:
            return { ...state, asideBarToggle: !state.asideBarToggle }
        default:
            return state
    }
}