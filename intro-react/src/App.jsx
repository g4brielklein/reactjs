import { Card } from './Card'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import style from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      
      <div className={ style.content }>
        <Sidebar />
        <main className={ style.feed }>
          <Card 
            title="The Boys" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure eligendi ipsa facilis provident id voluptas ipsam, labore sit illum. Nobis ad reiciendis veritatis itaque doloribus id ipsa natus laboriosam!" 
          />
          <Card 
            title="Breaking Bad" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure eligendi ipsa facilis provident id voluptas ipsam, labore sit illum. Nobis ad reiciendis veritatis itaque doloribus id ipsa natus laboriosam!" 
          />
        </main>
      </div>
    </>
  )
}
