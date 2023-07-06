import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
		}
		return posts;
	}, [posts, sort]);
	return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const filterAndSortedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query.toLowerCase()))
	}, [query, sortedPosts]);

	return filterAndSortedPosts;
}