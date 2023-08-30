import React from 'react'
import { Routes, Route } from "react-router-dom";
import News from '../pages/News';
import DetailNews from '../pages/DetailNews';

const Routers: React.FC = () => {
	return (
		<>

			<Routes>

				<Route path="/" element={<News />} />
				<Route path="/news/:publishedAt" element={<DetailNews />} />
			</Routes>
		</>
	)
}

export default Routers
