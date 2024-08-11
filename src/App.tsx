import React from 'react';
import './App.scss';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { PostsList } from './components/PostsList';
import { CreatePost } from './components/CreatePost';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>Sample app</h1>
        </header>
        <CreatePost />
        <PostsList />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
