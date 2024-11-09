import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Card } from './components/Card'

import './global.css'
import style from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      
      <div className={ style.content }>
        <Sidebar />
        <main className={ style.feed }>
          <Card />
        </main>
      </div>
    </>
  )
}
