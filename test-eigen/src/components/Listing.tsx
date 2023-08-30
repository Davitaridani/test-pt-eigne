import React from 'react'
import CardNews from './CardNews'

interface dataProps {
	data: any
}

const Listing: React.FC<dataProps> = ({ data }) => {
	return (
		<>
			{data?.map((item: any, i: number) => (
				<CardNews item={item} key={i} />
			))}
		</>
	)
}

export default Listing
