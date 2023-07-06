import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'
import classes from '../styles/PostItem.module.scss'

const PostItem = (props) => {
	const navigate = useNavigate()
	return (
		<div className={classes.postItem}>
			<div>
				<strong className={classes.postItem__title}>{props.post.id}. {props.post.title}</strong>
				<div className={classes.postItem__body}>
					{props.post.body}
				</div>
			</div>
			<div className={classes.postItem__con}>
				<MyButton style={{ backgroundColor: 'white', color: '#0093ad' }} onClick={() => props.deletePost(props.post)}>Delete</MyButton>
				<MyButton onClick={() => navigate(`/posts/${props.post.id}`)} style={{ marginLeft: '10px', backgroundColor: 'white', color: '#0093ad' }}>Open</MyButton>
			</div>
		</div >
	)
}

export default PostItem