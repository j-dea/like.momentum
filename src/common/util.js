export const padStart = (data, maxLength = 2, fillString = '0') => {
    return `${data}`.padStart(maxLength, fillString);
}