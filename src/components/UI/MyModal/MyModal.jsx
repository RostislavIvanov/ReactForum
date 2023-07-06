import React from 'react'
import cl from "./MyModal.module.scss"
const MyModal = ({ visible, children, setVisible }) => {
	const rootClasses = [cl.modal__back]
	if (visible) {
		rootClasses.push(cl.active)
	}
	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={cl.modal__window} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default MyModal