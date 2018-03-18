export const TOGGLE_LOGGIN = 'TOGGLE_LOGGIN';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_NAME = 'UPDATE_NAME';

export function toggleLoggIn(status) {
    return {
        type : TOGGLE_LOGGIN,
        status: status,
    }
}

export function updateEmail(email) {
    return {
        type : UPDATE_EMAIL,
        email: email,
    }
}

export function updateName(name) {
    return {
        type : UPDATE_NAME,
        name: name,
    }
}

