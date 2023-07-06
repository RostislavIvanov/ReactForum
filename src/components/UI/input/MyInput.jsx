import React from 'react'
import classes from './MyInput.module.scss'
const MyInput = (props) => {
	return (
		<input {...props} className={classes.input} type="text" />
	)
};

export default MyInput