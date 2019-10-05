
import authAction from './actions'

const initState = {
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') === 'true' : false,
    accessToken: localStorage.getItem('accessToken')
}


export default function rootReducer(state = initState, action) {

    switch (action.type) {
        case authAction.LOGIN:
            return {
                ...state,
                isLogin: action.isLogin,
                accessToken: action.accessToken,
            }
        case authAction.LOGOUT:
            return {
                ...state,
                isLogin: action.isLogin,
                accessToken: null
            }
        default:
            return state
    }
}