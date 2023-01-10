import {selector} from "./common/common.js";

const advice = (await fetch('https://api.adviceslip.com/advice').then(res => res.json())).slip.advice || '';

export const initialAdvice = () => {
	$(selector.advice).text(`"${advice}"`);
}