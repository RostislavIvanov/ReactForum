import React from 'react'
import MySelect from './UI/MySelect/MySelect'
import MyInput from './UI/input/MyInput'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				placeholder="Поиск..."
				state={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })} />
			<MySelect
				state={filter.sort}
				onChange={sort => setFilter({ ...filter, sort: sort })}
				defaultValue='Sorting' options={[
					{ name: "By title", value: 'title' },
					{ name: "By description", value: 'body' }]} />

		</div>
	)
}

export default PostFilter