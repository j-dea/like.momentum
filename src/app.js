import { className, selector } from './common/common.js';
import { handleLogin, initialGreetings, user } from './user.js';

$(document).ready(() => {
    if(user === null) {
        $(selector.loginForm).removeClass(className.hidden);
        $(selector.loginForm).on('submit', handleLogin);
    } else {
        initialGreetings(user);
    }
})