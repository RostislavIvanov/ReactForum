import PostIdPage from "../components/PostIdPage";
import Aboit from "../pages/About";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import Posts from "../pages/Posts";

export const publicRoutes = [
	{ path: '/posts', component: Posts, exact: true },
	{ path: '/about', component: Aboit, exact: false },
	{ path: '/posts/:id', component: PostIdPage, exact: true },
	{ path: '/error404', component: Error404, exact: false }
]

export const privateRoutes = [
	{ path: '/login', component: Login, exact: false },
]