import React, { useState, useEffect } from 'react'
import axios from "axios"
import { urlApi } from "../utils/api";
import Loading from "../components/Loading";
import { Row } from "antd";
import Listing from '../components/Listing';
import Error from '../components/Error';

interface Article {
	author: string,
	content: string,
	description: string,
	title: string,
	url: string,
	urlToImage: string,
	publishedAt: Date,
}

interface dataNews {
	data: Article[]
}

const News: React.FC<Article> = () => {

	const [dataArticles, setDataArticles] = useState<dataNews[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	const fetchArticles = async () => {
		try {
			const res = await axios.get(`${urlApi}`)
			setIsLoading(false)
			setDataArticles(res.data.articles)
		} catch (err) {
			setIsError(true)
		}
	}

	useEffect(() => {
		fetchArticles()
	}, [])

	if (isLoading) return <Loading />
	if (isError) return <Error />

	return (
		<>
			<section className='sect-news'>
				<div className="container">
					<Row gutter={[20, 20]}>
						<Listing data={dataArticles} />
					</Row>
				</div>
			</section>
		</>
	)
}

export default News
