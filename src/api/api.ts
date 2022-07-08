const b64EncodeUnicode = (str: string) => {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode(Number('0x' + p1));
        }));
};

const b64DecodeUnicode = (str: string) => {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
};

const getUserData = (token: string) => {
    const password = b64DecodeUnicode(token);
    return new Promise((resolve, reject) => {
        resolve({
            name: 'Максим',
            surname: 'Булавский',
            patronymic: 'Андреевич',
            country: 'Беларусь',
            city: 'Минск',
            phone: '+375 29 219 61 71',
            password: password,
            avatar: 'imageLink',
        });
    });
};

const login = (login: string, password: string) => {
    const token = b64EncodeUnicode(`${password}`);
    return new Promise<{token: string}>((resolve, reject) => {
        resolve({token});
    });
};


export const API = {
    login,
    getUserData,
};
