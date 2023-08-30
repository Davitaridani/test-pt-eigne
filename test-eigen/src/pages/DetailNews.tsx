import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { urlApi } from "../utils/api";
import axios from "axios";
import Loading from '../components/Loading';
import Error from '../components/Error';

interface Article {
	author: string,
	content: string,
	source: {
		name: string
	}
	description: string,
	title: string,
	url: string,
	urlToImage: string,
	publishedAt: string,
}

const DetailNews: React.FC = () => {

	const { publishedAt } = useParams();
	const [newsDetail, setNewsDetail] = useState<Article | null>(null);
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	// const date = publishedAt
	// const formatDate = date.replace("T", ' ')
	// const formatTime = formatDate.replace('Z', ' ')

	const fetchDataNews = async () => {
		try {
			const res = await axios.get(urlApi)
			const filterData = res.data.articles.filter((article: any) => {
				return article.publishedAt === publishedAt
			})
			setIsLoading(false)
			setNewsDetail(filterData[0]);
		} catch (err) {
			setIsError(true)
		}
	}

	useEffect(() => {
		fetchDataNews()
	}, [publishedAt])

	if (isLoading) return <Loading />
	if (isError) return <Error />
	return (
		<>
			<section className='sect-news-detail'>
				<div className="container">
					{newsDetail && (
						<div key={newsDetail.publishedAt} className='item-content-news-detail'>
							<div className="title-news-detail">
								<h1>{newsDetail.title}</h1>
								<img src={newsDetail.urlToImage} alt="cover news" />
								<Link to={newsDetail.url} target='_blank'>{newsDetail.source.name}
								</Link>
								<p>By <span>{newsDetail.author}</span> Published on <span>{newsDetail.publishedAt}</span>
								</p>
							</div>
							<hr />
							<div className="desc-news-detail">
								<p>{newsDetail.content}</p>
								<p>{newsDetail.description}</p>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	)
}

export default DetailNews
