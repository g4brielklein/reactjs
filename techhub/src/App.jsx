import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Card } from './components/Card'

import './global.css'
import style from './App.module.css'

export function App() {
  // mocked data
  const posts = [
    {
      user: {
        name: 'Gabriel Klein',
        role: 'Software Developer',
        profileImageUrl: 'https://github.com/g4brielklein.png',
      },
      content: `Hey everybody, I want to let you guys know that I've just started at a new position as a Software Developer at TechHub! 🚀 #softwareEngineering #development`,
      publishTimeText: 'Published 1hr ago',
      publishTimeTitle: 'November 7, 2024, 3:11PM',
      publishTime: '2024-11-07 15:11:25',
      comments: [
        {
          user: {
            name: 'Gabriel Klein',
            role: 'Software Developer',
            profileImageUrl: 'https://github.com/g4brielklein.png',
          },
          content: 'Congrats, man! 👏',
          likes: 3,
          publishTimeText: 'About 2hrs ago',
          publishTimeTitle: 'November 14, 2024, 6:53PM',
          publishTime: '2024-11-14 18:53:43',
        },
        {
          user: {
            name: 'Kyle Simpson',
            role: 'Software Developer',
            profileImageUrl: 'https://github.com/getify.png',
          },
          content: 'Awesome!',
          likes: 32,
          publishTimeText: 'About 3hrs ago',
          publishTimeTitle: 'November 14, 2024, 5:53PM',
          publishTime: '2024-11-14 17:53:43',
        }
      ]
    }
  ]

  return (
    <>
      <Header />
      
      <div className={ style.content }>
        <Sidebar />
        <main className={ style.feed }>
          { posts.map((post, index) => (
            <Card post={ post } key={ index } />
          )) }
        </main>
      </div>
    </>
  )
}
