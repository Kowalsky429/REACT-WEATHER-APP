import React from 'react';
import { useStateContext } from '../context/StateContext';

const Details = () => {
	const { data } = useStateContext();
	return (
		<div className="mt-20">
			<h3 className="text-4xl font-bold text-slate-400">{(data.main && Math.floor(data.main.temp)) || 'Current temp'}°C</h3>
			<h1 className="text-6xl sm:text-8xl font-bold my-5 -ml-1">{data.name || 'City name'}</h1>
			<p className="text-lg sm:text-xl ">
				<span className="text-secondary mr-2">Country:</span> {(data.sys && data.sys.country) || 'Unknown'}
			</p>
			<p className="text-lg sm:text-xl mt-3 ">
				<span className="text-secondary mr-2">Type of weather:</span> {(data.weather && data.weather[0].description) || 'Type'}
			</p>
			<div className="absolute z-[0] w-[40%] h-[60%] right-40 bottom-20 rounded-full white__gradient" />
		</div>
	);
};

export default Details;
