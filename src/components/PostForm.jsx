import React from 'react'
import { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
const PostForm = ({ create }) => {

	const [post, SetPost] = useState({ title: "", body: "" });

	const addNewPost = (event) => {
		event.preventDefault();
		const newPost = { ...post, id: Date.now() };
		create(newPost);
		SetPost({ title: "", body: "" });
	}

	return (
		<form>
			<MyInput placeholder='Название поста'
				value={post.title}
				onChange={(e) => { SetPost({ ...post, title: e.target.value }) }} />
			<MyInput placeholder='Описание поста'
				value={post.body}
				onChange={(e) => { SetPost({ ...post, body: e.target.value }) }} />
			<MyButton onClick={addNewPost} >Создать пост</MyButton>
		</form>
	)
}

export default PostForm