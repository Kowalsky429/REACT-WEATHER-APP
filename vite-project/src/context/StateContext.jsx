import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const Context = createContext({});

export const StateContext = ({ children }) => {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=493321d95e47b6f1ce6bc223b5599a3c`;

	const searchLocation = (e) => {
		if (e.key === 'Enter') {
			axios.get(url).then((res) => {
				setData(res.data);
			});
			setLocation('');
		}
	};

	return <Context.Provider value={{ data, setData, location, setLocation, searchLocation }}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
