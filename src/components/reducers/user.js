const initialState = null

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER_SUCCESS':
            return Object.assign({}, state, action.payload)
        case 'REGISTER_USER_ERROR':
            return Object.assign({}, state, action.payload)
        case 'LOGIN_USER_SUCCESS':
            return Object.assign({}, state, action.payload)
        case 'LOGIN_USER_ERROR':
            return Object.assign({}, state, action.payload)
        case 'SET_USER_DEFAULT':
            return initialState
        default:
            return state;
    }
}

export default userReducer;