import { useMemo } from "react";

export const usePagination = (totalPages) => {
	return useMemo(() => {
		const paginationBtns = [];
		for (let i = 0; i < totalPages; i++) { paginationBtns.push(i + 1) }
		return paginationBtns
	}, [totalPages]);
}