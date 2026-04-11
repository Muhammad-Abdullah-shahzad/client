export const setDataLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getDataLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const removeDataLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export const clearDataLocalStorage = () => {
    localStorage.clear();
}