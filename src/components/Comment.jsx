import React from 'react'
import classes from '../styles/Comment.module.scss'
const Comment = ({ name, email, body }) => {
	return (
		<div className={classes.comment}>
			<h3>User: {name}</h3>
			<span className={classes.comment__email}>{email}</span>
			<div>{body}</div>
		</div>
	)
}

export default Comment