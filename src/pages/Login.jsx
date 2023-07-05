import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)

	const submit = (e) => {
		e.preventDefault();
		localStorage.setItem('auth', true)
		setIsAuth(true);
	}
	return (
		<div>
			<h1>Войти</h1>
			<form onSubmit={submit}>
				<MyInput placeholder="Введите логин" />
				<MyInput placeholder="Введите пароль" />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	)
}

export default Login