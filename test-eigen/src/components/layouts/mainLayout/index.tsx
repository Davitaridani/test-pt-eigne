import React from 'react'
import Navbar from '../navbar'
import Routers from '../../../routers'
import Footer from '../footer'

const MainLayout: React.FC = () => {
	return (
		<>
			<Navbar />
			<Routers />
			<Footer />
		</>
	)
}

export default MainLayout
