import  secureLocalStorage  from  "react-secure-storage";

const save = (key: string, value: object) => {
    return secureLocalStorage.setItem(key, value);
}

const get = (key: string) => {
    return secureLocalStorage.getItem(key);
}

const deleteItem = (key: string) => {
    return secureLocalStorage.removeItem(key);
}

const deleteAll = () => {
    return secureLocalStorage.clear();
}

export { save, get, deleteItem, deleteAll }