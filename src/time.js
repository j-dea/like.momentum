import { selector } from './common/common.js';
import { padStart } from './common/util.js';

let timer = null;

export const currentPartsOfDay = (time) => {
    if(time >= 6 && time < 12) {
        return 'morning';
    } else if(time >= 12 && time < 18) {
        return 'afternoon';
    } else if(time >= 18 && time < 21) {
        return 'evening';
    } else if(time >= 21 || time < 3) {
        return 'night';
    } else {
        return 'midnight';
    }
}

export const printTimer = () => {
    const current = new Date();
    $(selector.clock).text(`${padStart(current.getHours())}:${padStart(current.getMinutes())}:${padStart(current.getSeconds())}`);
}

export const startTimer = () => {
    printTimer();
    timer = setInterval(printTimer, 1000);
}

export const stopTimer = () => {
    clearInterval(timer);
}

startTimer();