import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cl from './NavBar.module.scss'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context'
const NavBar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const exit = (e) => {
		e.preventDefault();
		localStorage.setItem('auth', false)
		setIsAuth(false);
	}
	return (
		<div className={cl.navigation}>
			<div className={cl.navigation__row}>
				<div className={cl.navigation__logo}>
					RR
				</div>
				<ul className={cl.navigation__list}>
					<li>
						<Link to='/posts' className={cl.link}>Posts</Link>
					</li>

					<li>
						<Link to='/about' className={cl.link} >About</Link>
					</li>

					<li>
						<MyButton style={{ backgroundColor: 'white', color: '#0093ad' }} onClick={exit}>Log Out</MyButton>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default NavBar