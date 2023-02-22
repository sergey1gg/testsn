import { authAPI } from "../api/api"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: 'SET_USER_DATA', payload: { userId, email, login, isAuth } })
export const getAuthUserData = () => async (dispatch) => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data
        dispatch(setAuthUserData(id, email, login, true))

    }
}
export const login = (email, password, rememberMe, actions) => async(dispatch) => {

    let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else {
            actions.setStatus(response.data.messages)
        }
}
export const logout = () => async(dispatch) => {
    let response=await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))

        }
}
export default authReducer