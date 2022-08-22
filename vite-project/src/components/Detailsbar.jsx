import React from 'react';
import { useStateContext } from '../context/StateContext';

const Detailsbar = () => {
	const { data } = useStateContext();
	return (
		<section className="flex items-center justify-between absolute bottom-5">
			<div className="mr-3 sm:mr-10 sm:text-lg">
				<p className="text-center font-bold">{Math.floor(data?.main?.feels_like) || 'Temp'}°C</p>
				<p>Feels Like</p>
			</div>
			<div className="mr-3 sm:mr-10 sm:text-lg">
				<p className="text-center font-bold">{data?.main?.humidity || 'Hum'}%</p>
				<p>Humidity</p>
			</div>
			<div className="mr-3 sm:mr-10 sm:text-lg">
				<p className="text-center font-bold">{data?.wind?.speed || 'WS '}MPH</p>
				<p>Wind Speed</p>
			</div>
			<div className="sm:text-lg">
				<p className="text-center font-bold">{data?.main?.pressure}hPa</p>
				<p>Pressure</p>
			</div>
		</section>
	);
};

export default Detailsbar;
