import { className, key, selector } from './common/common.js';
import { currentPartsOfDay } from './time.js';
import {handleSetFocus} from "./focus.js";

export const user = localStorage.getItem(key.user);

export const handleLogin = (e) => {
    e.preventDefault();
    $(selector.loginForm).addClass(className.hidden);
    const [username] = e.target;
    localStorage.setItem(key.user, username.value);
    initialGreetings(username.value);
    $(selector.focusForm).removeClass(className.hidden);
    $(selector.focusForm).on('submit', handleSetFocus);
}

export const handleLogout = () => {
    localStorage.removeItem(key.user);
    localStorage.removeItem(key.focus);
    $(selector.greetingContainer).addClass(className.hidden);
    $(selector.header).addClass(className.hidden);
    $(selector.footer).addClass(className.hidden);
    $(selector.loginForm).removeClass(className.hidden);
}

export const initialGreetings = (newUser) => {
    $(selector.header).removeClass(className.hidden);
    $(selector.footer).removeClass(className.hidden);
    $(selector.greetingContainer).removeClass(className.hidden);
    paintGreeting(newUser);
}

export const paintGreeting = (newUser) => {
    const time = currentPartsOfDay(new Date().getHours());
    $(selector.greeting).text(`Good ${time}, ${user || newUser}.`);
}

$(selector.loginForm).on('submit', handleLogin);
$(selector.logoutBtn).on('click', handleLogout);