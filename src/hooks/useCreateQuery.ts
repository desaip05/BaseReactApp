import { useMutation } from "@tanstack/react-query";
import { Post } from "../components/types";

export function useCreateQuery() {
    return useMutation({
        mutationFn: (post: Post) => {
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }
    })
}