const initialState = {
    token: null,
    authorized: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case "LOG_IN":
            return {token: action.token, authorized: true}
        case "LOG_OUT":
            return {token: null, authorized: false}
        default:
            return state;
    }
}