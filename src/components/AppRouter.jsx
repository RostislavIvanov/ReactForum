import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../route/routes'
import { AuthContext } from '../context'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext)

	if (isLoading) {
		return <Loader />
	}
	return (
		isAuth
			? <Routes>
				{publicRoutes.map((el, ind) =>
					<Route key={ind}
						path={el.path}
						Component={el.component}
						exact={el.exact}
					/>
				)}
				<Route path="/*" element={<Navigate to="/posts" replace />} />
			</Routes>

			: <Routes>
				{privateRoutes.map((el, ind) =>
					<Route key={ind}
						path={el.path}
						Component={el.component}
						exact={el.exact}
					/>
				)}
				<Route path="/*" element={<Navigate to="/login" replace />} />
			</Routes>

	)
}

export default AppRouter