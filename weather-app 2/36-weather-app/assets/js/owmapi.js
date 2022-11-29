/**
 * openWeatherMap API
 */
const API_KEY = "2cb5f83f09949a2a137c19af0d64a4a9";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getCurrentWeather = async (city) => {
	// get weather for city from OpenWeatherMap API
	const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

	// check if response is ok
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	// convert response from JSON
	const data = await response.json();

	// return current weather
	return data;
}
