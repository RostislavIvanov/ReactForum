import React, { useEffect, useRef, useState } from 'react'
import '../styles/App.css'
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { CountPages } from '../utils/Pages';
import Pagination from '../components/Pagination';

function Posts() {
	// ! State для постов
	const [posts, setPosts] = useState([]);
	// ! State для фильтрации
	const [filter, setFilter] = useState({ sort: '', query: '' })
	// ! State для модульного окна
	const [modal, setModal] = useState(false);
	// ! State для лимита постов
	const [limit, setLimit] = useState(10);
	// ! State для открытой конкретной страницы
	const [page, setPage] = useState(1);
	// ! State для общего количества страниц
	const [totalPages, setTotalPages] = useState(0);
	// ! Создание поста
	const createPost = (newPost) => { setPosts([...posts, newPost]); setModal(false); }
	// ! Удаление поста
	const deletePost = (post) => { setPosts(posts.filter(el => el.id !== post.id)) }
	// ! Хук для фильтрации и сортировки
	const filterAndSortedPosts = usePosts(posts, filter.sort, filter.query);
	// ! Запрос постов с сервера
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const responce = await PostService.getAll(limit, page); // сами данные постов 
		setTotalPages(CountPages(responce.headers['x-total-count'], limit)) // считаем количество страниц данных с опредеденным лимитом
		setPosts([...posts, ...responce.data]); // передача данных стейту постов
	})
	const lastElement = useRef();
	const observer = useRef();
	useEffect(() => {
		// функция обратного вызова
		if (isPostsLoading) return
		if (observer.current) observer.current.disconnect();
		let callback = function (entries, observer) {
			if (entries[0].isIntersecting && page < totalPages) {
				setPage(page + 1)
			}
		}
		// наблюдатель
		observer.current = new IntersectionObserver(callback)
		observer.current.observe(lastElement.current)
	}, [isPostsLoading])
	// ! Хук для отрисовки постов
	useEffect(() => {
		fetchPosts()
	}, [page])

	return (
		<div>
			<MyButton
				style={{ marginTop: 20 }} onClick={() => setModal(true)}>
				Create post
			</MyButton>

			<MyModal visible={modal} setVisible={setModal}>
				<PostForm
					create={createPost} />
			</MyModal>

			<hr
				style={{ margin: '15px' }} />

			<PostFilter
				filter={filter} setFilter={setFilter} />
			{postError &&
				<h1>Ошибка {postError}</h1>
			}

			{isPostsLoading &&
				<Loader />}
			<PostList
				isPostsLoading={isPostsLoading}
				deletePost={deletePost}
				posts={filterAndSortedPosts} title={'Posts'} />


			<div style={{ height: 20 }} ref={lastElement}></div>


			{/* <Pagination totalPages={totalPages} setPage={setPage} /> */}

		</div>

	);
}

export default Posts;
