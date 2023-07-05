export const CountPages = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}