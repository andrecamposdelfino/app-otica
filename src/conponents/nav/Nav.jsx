import { NavLink } from "react-router-dom"

// config css
import style from "./nav.module.css"

export default function Nav(){
    return (
        <nav className={style.navcontainer}>        
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/clientes">Clientes</NavLink></li>
                <li><NavLink to="/exames">Exames</NavLink></li>
            </ul>
        </nav>
    )
}