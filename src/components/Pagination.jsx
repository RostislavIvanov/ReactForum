import React from 'react'
import MyButton from './UI/button/MyButton'
import { usePagination } from '../hooks/usePagination';

const Pagination = ({ totalPages, setPage }) => {

	// ! Хук для создания массива количества кнопок пагинации
	const createPagBtns = usePagination(totalPages);

	return (
		<div>
			{createPagBtns.map((el, ind) => {
				return <MyButton style={{ marginTop: 30, marginRight: 5, marginBottom: 30 }}
					key={ind}
					onClick={() => setPage(el)}>
					{el}
				</MyButton>
			})}
		</div>
	)
}

export default Pagination