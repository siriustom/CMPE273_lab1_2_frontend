import { TOGGLE_LOGGIN, UPDATE_EMAIL, UPDATE_NAME } from '../actions/action';
import initialState from '../store/initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOGGIN: {
            return Object.assign({}, state, {
                isLoggedIn: action.status,
            });
        }
        case UPDATE_EMAIL: {
            return Object.assign({}, state, {
                email: action.email,
            });
        }
        case UPDATE_NAME: {
            return Object.assign({}, state, {
                name: action.name,
            });
        }
        default :
            return state;

    }
};

export default reducer;

