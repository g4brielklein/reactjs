import { useState, useEffect } from 'react'
import useSWR from 'swr'

import axios from 'axios'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Card } from './components/Card'

import './global.css'
import style from './App.module.css'

export function App() {
  const [posts, setPosts] = useState([]);

  const { data, error, isLoading } = useSWR('http://localhost:3000/posts', fetcher);

  async function fetcher(key) {
    const response = await axios.get(key);
    return response.data;
  }

  useEffect(() => {
    if (data) {
      setPosts(data)
    }
  }, [data])

  return (
    <div>
      <Header />
      
      <div className={ style.content }>
        <Sidebar />
        <main className={ style.feed }>
          { posts.map(post => (
            <Card post={ post } key={ post.id } />
          )) }
        </main>
      </div>
    </div>
  )
}
