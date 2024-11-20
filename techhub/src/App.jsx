import { useState, useEffect } from 'react'

import axios from 'axios'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Card } from './components/Card'

import './global.css'
import style from './App.module.css'

export function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('http://localhost:3000/posts');

      setPosts(response.data)
    }

    getPosts()
  }, [])

  // mocked data
  // const posts = [
  //   {
  //     user: {
  //       name: 'Gabriel Klein',
  //       role: 'Software Developer',
  //       profileImageUrl: 'https://github.com/g4brielklein.png',
  //     },
  //     content: `Hey everybody, I want to let you guys know that I've just started at a new position as a Software Developer at TechHub! 🚀 #softwareEngineering #development`,
  //     publishTime: new Date('2024-11-07 16:50:25'),
  //     comments: [
  //       {
  //         user: {
  //           name: 'Gabriel Klein',
  //           role: 'Software Developer',
  //           profileImageUrl: 'https://github.com/g4brielklein.png',
  //         },
  //         content: 'Congrats, man! 👏',
  //         likes: 3,
  //         publishTime: new Date('2024-11-14 18:53:43'),
  //       },
  //       {
  //         user: {
  //           name: 'Kyle Simpson',
  //           role: 'Software Developer',
  //           profileImageUrl: 'https://github.com/getify.png',
  //         },
  //         content: 'Awesome!',
  //         likes: 32,
  //         publishTime: new Date('2024-11-17 13:53:43'),
  //       }
  //     ]
  //   }
  // ]

  return (
    <div>
      <Header />
      
      <div className={ style.content }>
        <Sidebar />
        <main className={ style.feed }>
          { posts.map((post, index) => (
            <Card post={ post } key={ index } />
          )) }
        </main>
      </div>
    </div>
  )
}
