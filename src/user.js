import { className, selector } from './common/common.js';
import { currentPartsOfDay } from './time.js';

const LOCALSTORAGE_KEY = 'user';

export const user = localStorage.getItem(LOCALSTORAGE_KEY);

export const handleLogin = (e) => {
    e.preventDefault();
    $(selector.loginForm).addClass(className.hidden);
    const [username] = e.target;
    localStorage.setItem(LOCALSTORAGE_KEY, username.value);
    initialGreetings(username.value);
}

export const handleLogout = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    $(selector.greetingContainer).addClass(className.hidden);
    $(selector.header).addClass(className.hidden);
    $(selector.footer).addClass(className.hidden);
    $(selector.loginForm).removeClass(seleclassNamector.hidden);
}

export const initialGreetings = (user) => {
    const time = currentPartsOfDay(new Date().getHours());
    $(selector.header).removeClass(className.hidden);
    $(selector.footer).removeClass(className.hidden);
    $(selector.greetingContainer).removeClass(className.hidden);
    $(selector.greeting).text(`Good ${time}, ${user}.`);
}

$(selector.loginForm).on('submit', handleLogin);
$(selector.logoutBtn).on('click', handleLogout);