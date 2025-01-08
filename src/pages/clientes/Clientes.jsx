import { NavLink } from "react-router-dom";

export default function Clientes() {
    return (
        <>
            <h1>Clientes</h1>
            <NavLink to="/formulario">Adicionar novo cliente</NavLink>
        </>
    )
}