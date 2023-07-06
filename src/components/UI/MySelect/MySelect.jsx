import React from 'react'
import classes from './MySelect.module.scss'
const MySelect = ({ defaultValue, options, state, onChange }) => {
	return (
		<select className={classes.select} state={state} onChange={event => onChange(event.target.value)} >
			<option disabled value={""}>{defaultValue}</option>
			{options.map(option =>
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			)}
		</select>
	)
}

export default MySelect