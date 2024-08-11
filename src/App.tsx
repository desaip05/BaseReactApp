import React from 'react';
import './App.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PostsList } from './components/PostsList';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>Sample app</h1>
        </header>
        <PostsList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
