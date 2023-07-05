import React, { useEffect, useState } from 'react'
import { useFetching } from '../hooks/useFetching'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from './UI/Loader/Loader'
import classes from '../styles/PostIdPage.module.scss'
import Comment from './Comment'
const PostIdPage = () => {
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])


	const params = useParams()
	const [fetchingById, isIdLoading, IdError] = useFetching(async () => {
		const response = await PostService.getByID(params.id);
		setPost(response.data)
	})
	const [fetchingByComments, isCommentLoading, CommentsError] = useFetching(async () => {
		const response = await PostService.getByComments(params.id);
		setComments(response.data)
	})


	useEffect(() => {
		fetchingById();
		fetchingByComments();
	}, [])
	return (
		<div className={classes.postInfo}>
			<h1 className={classes.postInfo__title}>
				{isIdLoading
					? <Loader />
					: post.title
				}
			</h1>

			<div className={classes.postInfo__desc}>
				{isIdLoading
					? <Loader />
					: post.body
				}
			</div>
			<h2 className={classes.postInfo__comments}>Comments:</h2>
			{isCommentLoading
				? <Loader />
				: comments.map((el, ind) => {
					return <Comment key={el.id} name={el.name} email={el.email} body={el.body} />
				})}
		</div>
	)
}

export default PostIdPage