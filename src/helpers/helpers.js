export const isEqual = (a, b) => {
    if (a === b) return true;
  
    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !isEqual(a[key], b[key])) return false;
    }

    return true;
};

export const saveHistory = (user, history) => {
    const { login, sublogin } = user;
    const historyId = sublogin ? `${login}:${sublogin}` : login;

    localStorage.setItem(historyId, JSON.stringify(history));
};

export const loadHistory = (user = {}) => {
    const { login, sublogin } = user;
    const historyId = sublogin ? `${login}:${sublogin}` : login;

    try {
        const history = JSON.parse(localStorage.getItem(historyId));
        
        if(history) {
            return history;
        } else {
            return [];
        }
    } catch(e) {
        return [];
    }
};

export const loadSettings = () => {
    return JSON.parse(localStorage.getItem('viewSettings'));
};