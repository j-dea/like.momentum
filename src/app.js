import { className, selector } from './common/common.js';
import { handleLogin, initialGreetings, user } from './user.js';
import { focus, handleSetFocus, initialFocusContent } from "./focus.js";
import {handleAddTodo, handleTodoVisible} from "./todo.js";
import {initialAdvice} from "./advice.js";
import {initialWeather} from "./weather.js";

$(document).ready(() => {
    if(user === null) {
        $(selector.loginForm).removeClass(className.hidden);
        $(selector.loginForm).on('submit', handleLogin);
    } else {
        initialGreetings();
        initialWeather();
        initialAdvice();
        $(selector.todoOpenBtn).click(handleTodoVisible)
        $(selector.todoForm).on('submit', handleAddTodo);
        if(focus === null) {
            $(selector.focusForm).removeClass(className.hidden);
            $(selector.focusForm).on('submit', handleSetFocus);
        } else {
            initialFocusContent();
        }
    }
})