
// config css
import Nav from "../nav/Nav"
import style from "./header.module.css"

export default function Header(){
    return (
        <header className={style.header}>        
            <h1>ÓTICA MARIANA</h1>
            <Nav />
        </header>
    )
}