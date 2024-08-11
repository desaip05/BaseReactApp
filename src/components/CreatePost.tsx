import React, { FormEvent, useEffect, useState } from "react"
import './CreatePost.scss'
import { useCreateQuery } from "../hooks/useCreateQuery";
import { useQueryClient } from "@tanstack/react-query";
import { POSTS_FETCH_QUERY_KEY } from "../hooks/constants";

type CreatePostProps = {
    onSuccess?: () => void
}

export function CreatePost({ onSuccess }: CreatePostProps) {
    const queryClient = useQueryClient();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const createPost = useCreateQuery();
    const { isPending, isSuccess } = createPost;

    const createPostHanler = (event: FormEvent) => {
        event.preventDefault();
        if (!!title || !!body) {
            createPost.mutate({ id: 101, userId: 2, title, body });
        }
    };

    useEffect(() => {
        if (!isPending && isSuccess) {
            setTitle('');
            setBody('');
            onSuccess?.();
            queryClient.invalidateQueries({ queryKey: [POSTS_FETCH_QUERY_KEY] });
        }
    }, [isPending, isSuccess, queryClient])

    return (
        <>
            <h1>Create post</h1>
            <form onSubmit={createPostHanler} className="createPostForm">
                <div className="createPostFormField">
                    <label>Title</label>
                    <input placeholder="Enter title" name="postTitle" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="createPostFormField">
                    <label>Body</label>
                    <textarea placeholder="Enter body" name="postBody" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <button type="submit" disabled={!title} className="createPostFormSubmit">Create</button>
            </form>

        </>
    )
}