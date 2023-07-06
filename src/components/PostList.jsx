import React from 'react'
import PostItem from './PostItem'
import '../styles/PostList.module.scss'
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';
import Title from './UI/Title/Title';
const PostList = ({ posts, title, deletePost, isPostLoading }) => {
	if (!posts.length) { //показать если длина ноль и посты не загружаются
		return <Title style={{ width: '800px' }}>Posts not found!</Title>
	}
	return (
		<div className='App'>
			<Title>{title}</Title>
			<TransitionGroup>
				{
					posts.map((post, index) =>
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames='post'
						>
							<PostItem deletePost={deletePost} index={index} post={post} />
						</CSSTransition>
					)
				}
			</TransitionGroup>
		</div >
	)
}

export default PostList