import { className, selector } from './common/common.js';
import { handleLogin, initialGreetings, user } from './user.js';
import {focus, handleSetFocus, initialFocusContent} from "./focus.js";

$(document).ready(() => {
    if(user === null) {
        $(selector.loginForm).removeClass(className.hidden);
        $(selector.loginForm).on('submit', handleLogin);
    } else {
        initialGreetings();
        if(focus === null) {
            $(selector.focusForm).removeClass(className.hidden);
            $(selector.focusForm).on('submit', handleSetFocus);
        } else {
            initialFocusContent();
        }
    }
})