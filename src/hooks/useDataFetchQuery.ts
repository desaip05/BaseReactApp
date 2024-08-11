import { DefaultError, useInfiniteQuery, UseInfiniteQueryResult, useQuery, UseQueryResult } from "@tanstack/react-query"
import { DEFAULT_QUERY_OPTIONS, POSTS_FETCH_QUERY_KEY } from "./constants"
import { Posts } from "../components/types"


export function useDataFetchQuery(): UseQueryResult<Posts, DefaultError> {
    return useQuery({
        queryKey: [POSTS_FETCH_QUERY_KEY],
        queryFn: async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
            )
            return await response.json()
        },
        ...DEFAULT_QUERY_OPTIONS
    })
}

export function usePaginatedDataFetchQuery(): UseInfiniteQueryResult<Posts, DefaultError> {
    return useInfiniteQuery({
        queryKey: [POSTS_FETCH_QUERY_KEY],
        queryFn: async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
            )
            return await response.json()
        },
        initialPageParam: 1,
        ...DEFAULT_QUERY_OPTIONS,
        maxPages: 10,
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
            lastPage.nextCursor,
        getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) =>
            firstPage.prevCursor,
    })
}