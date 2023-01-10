import {className, key, selector} from "./common/common.js";

export const focus = localStorage.getItem(key.focus);

export const handleSetFocus = (e) => {
	e.preventDefault();
	$(selector.focusForm).addClass(className.hidden);
	const [focusText] = e.target;
	localStorage.setItem(key.focus, focusText.value);
	initialFocusContent(focusText.value);
}

export const initialFocusContent = (newFocus) => {
	$(selector.focusContainer).removeClass(className.hidden);
	showFocus(newFocus);
}

export const showFocus = (newFocus) => {
	$(selector.focusContent).text(focus || newFocus);
}