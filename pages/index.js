import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import News from '../components/News';

export default function Home() {
	return (
		<>
			<div className="container">
				{/* Header */}
				<Header />
				<Hero />
				<News />
			</div>
		</>
	);
}
