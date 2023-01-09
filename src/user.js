const LOCALSTORAGE_KEY = 'user';

const user = localStorage.getItem(LOCALSTORAGE_KEY);

export const handleLogin = (e) => {
    e.preventDefault();
    const [username] = e.target;
    localStorage.setItem(LOCALSTORAGE_KEY, username.value);
}

export const handleLogout = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY);
}