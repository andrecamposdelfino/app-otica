
// config css
import style from "./footer.module.css"


export default function Footer(){
    return(
        <footer className={style.footer}>
            <h3>Ótica Mariana</h3>
            <p>© Todos os direitos reservados</p>
        </footer>
    )
}