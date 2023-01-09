import { selector } from './common.js';
import { currentPartsOfDay } from './time.js';

const LOCALSTORAGE_KEY = 'user';

export const user = localStorage.getItem(LOCALSTORAGE_KEY);

export const handleLogin = (e) => {
    e.preventDefault();
    $(selector.loginForm).addClass('hidden');
    const [username] = e.target;
    localStorage.setItem(LOCALSTORAGE_KEY, username.value);
    initialGreetings(username.value);
}

export const handleLogout = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    $(selector.greetingContainer).addClass('hidden');
    $(selector.header).addClass('hidden');
    $(selector.footer).addClass('hidden');
    $(selector.loginForm).removeClass('hidden');
}

export const initialGreetings = (user) => {
    const time = currentPartsOfDay(new Date().getHours());
    $(selector.header).removeClass('hidden');
    $(selector.footer).removeClass('hidden');
    $(selector.greetingContainer).removeClass('hidden');
    $(selector.greeting).text(`Good ${time}, ${user}.`);
}

$(selector.loginForm).on('submit', handleLogin);
$(selector.logoutBtn).on('click', handleLogout);