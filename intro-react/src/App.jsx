import { Card } from './Card'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Card 
        title="The Boys" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure eligendi ipsa facilis provident id voluptas ipsam, labore sit illum. Nobis ad reiciendis veritatis itaque doloribus id ipsa natus laboriosam!" 
      />

      <Card 
        title="Breaking Bad" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure eligendi ipsa facilis provident id voluptas ipsam, labore sit illum. Nobis ad reiciendis veritatis itaque doloribus id ipsa natus laboriosam!" 
      />
    </>
  )
}
