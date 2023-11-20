export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}

export function setUserData(userData) {
    sessionStorage.setItem('userData', JSON.stringify(userData))
}

export function createSubmitHandler(callback) {
    return (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        callback(data)
    }
}