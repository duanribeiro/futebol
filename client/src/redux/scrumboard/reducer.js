
import scrumAction from './actions'

const initState = {
    boards: []
}


export default function rootReducer(state = initState, action) {

    switch (action.type) {
        case scrumAction.UPDATE_BOARDS:
            return {
                ...state,
                boards: action.boards,
            }
        default:
            return state
    }
}