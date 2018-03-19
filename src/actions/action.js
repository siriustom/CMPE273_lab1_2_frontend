export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_ID = 'UPDATE_ID';
export const UPDATE_PHONE = 'UPDATE_PHONE';
export const UPDATE_ABOUT = 'UPDATE_ABOUT';
export const UPDATE_SKILLS = 'UPDATE_SKILLS';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

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

export function updateId(id) {
    return {
        type : UPDATE_ID,
        id: id,
    }
}

export function updatePhone(phone) {
    return {
        type : UPDATE_PHONE,
        phone: phone,
    }
}

export function updateAbout(about) {
    return {
        type : UPDATE_ABOUT,
        about,
    }
}

export function updateSkills(skills) {
    return {
        type : UPDATE_SKILLS,
        skills,
    }
}

export function updateImage(image) {
    return {
        type : UPDATE_IMAGE,
        image,
    }
}

export function updatePassword(password) {
    return {
        type : UPDATE_PASSWORD,
        password,
    }
}



