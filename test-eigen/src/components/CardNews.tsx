import React from 'react'
import { Col, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

interface itemsProps {
	item: {
		urlToImage: string
		publishedAt: Date
		title: string
		description: string
	}
}

const CardNews: React.FC<itemsProps> = ({ item }) => {
	const { urlToImage, publishedAt, title, description } = item

	return (
		<>
			<Col lg={8} >
				<Card
					hoverable
					cover={<img src={urlToImage} alt="image cover" />
					}
				>
					<Link to={`/news/${publishedAt}`} className='link-detail'>
						<Meta
							title={title}
							description={description}
						/>
					</Link>
				</ Card>
			</Col>
		</>
	)
}

export default CardNews
