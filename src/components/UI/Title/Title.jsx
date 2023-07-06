import React from 'react'
import classes from './Title.module.scss'
const Title = (props) => {
	return (
		<h1 {...props} className={classes.title}>{props.children}</h1>
	)
}

export default Title