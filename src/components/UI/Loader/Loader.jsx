import React from 'react'
import cl from './Loader.module.scss'
const Loader = () => {
	return (
		<div className={cl.loader__div}>
			<span className={cl.loader__span}></span>
		</div>
	)
}

export default Loader