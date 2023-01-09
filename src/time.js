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