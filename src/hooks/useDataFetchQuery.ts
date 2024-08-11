import { DefaultError, useQuery, UseQueryResult } from "@tanstack/react-query"
import { DEFAULT_QUERY_OPTIONS } from "./constants"
import { Posts } from "../components/types"


export function useDataFetchQuery(): UseQueryResult<Posts, DefaultError> {
    return useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
            )
            return await response.json()
        },
        ...DEFAULT_QUERY_OPTIONS
    })
}