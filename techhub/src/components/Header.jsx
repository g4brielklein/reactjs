import style from './Header.module.css'
import logo from '../assets/logo.png'

export function Header() {
    return (
        <header className={ style.header }>
            <img src={ logo } alt="App logo" />
            <h1>TechHub</h1>
        </header>
    )
}
