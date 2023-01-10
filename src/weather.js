import {className, selector} from "./common/common.js";

const handelGeolocationSuccess = (position) => {
	const {coords: {latitude, longitude}} = position;
	const url = `https://api.momentum.jdea.app:3000/weather?lat=${latitude}&lon=${longitude}`;
	$(selector.weatherIcon).removeClass(className.hidden);
	fetch(url)
		.then(res => res.json())
		.then(data => settingWeatherBlock(data))
	;
}

const handelGeolocationError = () => {
	console.error('ERROR');
}

const settingWeatherBlock = (_weather) => {
	const { main: { temp }, name: city, weather } = _weather;
	$(selector.weatherIcon).attr('src', `https://openweathermap.org/img/w/${weather[0].icon}.png`);
	$(selector.weatherTemp).text(`${temp.toFixed(1)}℃`);
	$(selector.weatherCity).text(`${city}`);
}

export const initialWeather = () => {
	navigator.geolocation.getCurrentPosition(handelGeolocationSuccess, handelGeolocationError);
}
