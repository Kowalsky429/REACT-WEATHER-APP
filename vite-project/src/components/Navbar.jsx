import React from 'react';
import { useState } from 'react';

const Navbar = () => {
	const [time, setTime] = useState('');

	setInterval(() => {
		const hours = new Date().getHours();
		const minutes = new Date().getMinutes();
		setTime(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`);
	}, 1000);

	return (
		<nav className="py-6 flex items-center justify-between">
			<h3 className="text-lg md:text-xl">Weather app</h3>
			<p className="text-lg md:text-xl">{time}</p>
		</nav>
	);
};

export default Navbar;
