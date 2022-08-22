import React from 'react';
import { useStateContext } from '../context/StateContext';

const Searchbar = () => {
	const { searchLocation, location, setLocation } = useStateContext();
	return (
		<input
			type="text"
			placeholder="Your location..."
			className="mt-10 w-full h-[40px] rounded-lg bg-slate-600 text-center "
			onKeyPress={searchLocation}
			onChange={(e) => setLocation(e.target.value)}
			value={location}
		/>
	);
};

export default Searchbar;
