import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/UI/NavBar/NavBar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsloading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setIsloading(false)
	}, [])

	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading
		}}>
			<BrowserRouter>
				<NavBar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
