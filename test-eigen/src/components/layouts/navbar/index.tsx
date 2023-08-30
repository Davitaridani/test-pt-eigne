import React from 'react'
import { Link } from "react-router-dom";
import { ImNewspaper } from "react-icons/im";

const Navbar: React.FC = () => {
	return (
		<>
			<nav className="navbar">
				<div className="container">
					<Link to="/">
						<span>
							<ImNewspaper />
						</span>
						News Api
					</Link>
				</div>
			</nav>
		</>
	)
}

export default Navbar
