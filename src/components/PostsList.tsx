import React from 'react'
import { useDataFetchQuery } from '../hooks';

import './Posts.scss';

export function PostsList() {
    const { isPending, error, data: posts } = useDataFetchQuery();

    if (isPending) return <h2>Loading...</h2>

    if (error) return <h2>An error has occurred: {error.message}</h2>;

    return (
        <>
            <h1>My posts</h1>
            <div className='posts'>
                {!posts && <h2>No posts found</h2>}
                {posts && posts.map(post =>
                    <ul key={post.id} className='post-list'>
                        <li key={post.id} className='post-item'>
                            <h3>Post: {post.id}</h3>
                            <p>{post.body}</p>
                        </li>
                    </ul>
                )}
            </div>
        </>
    )
}