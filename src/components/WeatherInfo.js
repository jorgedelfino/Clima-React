import React from 'react';

import CurrentWeather from './CurrentWeather';
import ExtendedWeather from './ExtendedWeather';

import EmptyLocation from './EmptyLocation';
import Spinner from './Spinner';
import Error404 from './Error404';

import './weather-info.css';

const WeatherInfo = props => {

	const { weather_code } = props.currentWeather;
	const { status, loading, empty } = props;

	let image;
	let style;

	if (weather_code) {
		switch (weather_code) {

			case weather_code <= 232:
				image = 'thunderstorm';
				break;

			case weather_code <= 321:
				image = 'shower-rain';
				break;
			
			case weather_code <= 504:
				image = 'rain';
				break;

			case 511:
				image = 'snow';
				break;

			case weather_code <= 531:
				image = 'shower-rain';
				break;

			case weather_code <= 622:
				image = 'snow';
				break;

			case weather_code <= 781:
				image = 'mist';
				break;

			case 800:
				image = 'clear-sky';
				break;

			case 801:
				image = 'few-clouds';
				break;

			case 802:
				image = 'scattered-clouds';
				break;

			case 803:
				image = 'broken-clouds';
				break;

			default:
				image = '';
				break;
		}

		style = {
			backgroundImage: `url(${require(`../assets/images/${image}.jpg`)})`
		}
	}

	let display;

	if (empty) {
		display = <EmptyLocation/>
	} else {
		if (loading) {
			display = <Spinner/>
		} else {
			if (status === 200) {
				display = <div className="container-fluid h-100">
							<div className="row h-100">
								<CurrentWeather
									weather={props.currentWeather}
								/>
								<ExtendedWeather
									weather={props.extendedWeather}
								/>
							</div>
						</div>
			} else if (status === 404) {
				display = <Error404/>
			}
		}
	}

	return (
		<div className="weather-info" style={style}>
			{ display }
		</div>
	);
}
 
export default WeatherInfo;