import {
    UPDATE_ID,
    UPDATE_EMAIL,
    UPDATE_NAME,
    UPDATE_ABOUT,
    UPDATE_IMAGE,
    UPDATE_PASSWORD,
    UPDATE_PHONE,
    UPDATE_SKILLS,
} from '../actions/action';
import initialState from '../store/initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
        case UPDATE_ID: {
            return Object.assign({}, state, {
                id: action.id,
            });
        }
        case UPDATE_PASSWORD: {
            return Object.assign({}, state, {
                password: action.password,
            });
        }
        case UPDATE_PHONE: {
            return Object.assign({}, state, {
                phone: action.phone,
            });
        }
        case UPDATE_IMAGE: {
            return Object.assign({}, state, {
                image: action.image,
            });
        }
        case UPDATE_ABOUT: {
            return Object.assign({}, state, {
                about: action.about,
            });
        }
        case UPDATE_SKILLS: {
            return Object.assign({}, state, {
                skills: action.skills,
            });
        }
        default:
            return state;

    }
};

export default reducer;

